import { BsFillPeopleFill } from "react-icons/bs"

const BoardCardComponent = (props: any) => {
    return (
        <div className="kb-board-card" style={{ background: `linear-gradient(180deg, ${props.boardColor} 30%, #000 200%)` }}>
            <div className="kb-board-card-header">
                <div className="kb-board-card-header-members">
                    <BsFillPeopleFill fill="#f5f7fb" />
                    <p>{props.membersCount}</p>
                </div>
                <button className="kb-board-card-button">+</button>
            </div>
            <div className="kb-board-card-body">
                <div className="kb-board-card-body-title">
                    <p>{props.boardName}</p>
                </div>
            </div>
            <div className="kb-board-card-footer">
                <div>
                    <p>_</p>
                </div>
            </div>
        </div>
    );
}

export default BoardCardComponent;
