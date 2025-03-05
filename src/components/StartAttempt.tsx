import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [inProgress, setProgress] = useState<boolean>(false);
    const [numAttempts, setAttempts] = useState<number>(4);
    function changeProgress(): void {
        setProgress(!inProgress);
    }
    function changeAttempts(): void {
        setAttempts(numAttempts - 1);
    }
    function changeAttempts2(): void {
        setAttempts(numAttempts + 1);
    }

    return (
        <div>
            Start Attempt
            <div>
                <Button
                    onClick={() => {
                        changeProgress();
                        changeAttempts();
                    }}
                    disabled={inProgress || numAttempts == 0}
                >
                    Start Quiz
                </Button>{" "}
                <Button
                    onClick={() => {
                        changeProgress();
                    }}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </div>
            <p>Number of Attempts: {numAttempts}</p>
            <div>
                <Button onClick={changeAttempts2} disabled={inProgress}>
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
