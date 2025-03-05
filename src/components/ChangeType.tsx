import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [q_type, typeState] = useState<QuestionType>("short_answer_question");
    function changeState(): void {
        typeState(
            q_type === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={changeState}>Change Type</Button>
            {q_type === "multiple_choice_question" && (
                <div>Multiple Choice</div>
            )}
            {q_type === "short_answer_question" && <div>Short Answer</div>}
        </div>
    );
}
