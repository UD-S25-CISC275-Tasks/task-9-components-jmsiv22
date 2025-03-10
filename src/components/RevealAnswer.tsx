import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibile, setVisible] = useState<boolean>(false);
    function visibilitySet(): void {
        setVisible(!visibile);
    }
    return (
        <div>
            <Button onClick={visibilitySet}>Reveal Answer</Button>
            {visibile && <div>42</div>}
        </div>
    );
}
