import Column from "../Column/Column";
import "./BoardContent.scss";
import { data } from "../../Data/Data";
import { useState, useEffect } from "react";
import _ from "lodash";
import { mapOrder } from "../../helpers/helpers";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardData = data.boards.find((item) => item.id === "board-1");
    if (boardData) {
      setBoard(boardData);
      setColumns(mapOrder(boardData.columns, boardData.columnOrder, "id"));
    }
  }, []);
    const reorder = (list,starIndex,endIndex) => {
        const result = Array.from(columns);
        const [removed] = result.splice(starIndex, 1);
        result.splice(endIndex, 0, removed);
        return result
    }
  if (_.isEmpty(board)) {
    return (
      <>
        <div className="not-found">Board not found</div>
      </>
    );
  }


  return (
    <DragDropContext onDragEnd={(result) => {
        const {source, destination} = result;
        if(!destination)
            {
                return;
            }
        if(
            source.index === destination.index && source.droppableId === destination.droppableId

        )return;

        setColumns((prevColumns) => reorder(prevColumns,source.index,destination.index))
    }}>
            <Droppable droppableId="droppable-columns" direction="horizontal">
                {(provided) => (
                    <div className="board-columns" {...provided.droppableProps} ref={provided.innerRef}>
                        {columns && columns.length > 0 && columns.map((column, index) => (
                            <Draggable key={column.id} draggableId={column.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Column key={column.id} column={column} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
  );
};

export default BoardContent;
