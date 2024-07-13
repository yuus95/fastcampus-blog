




export default function Comments() {
    return (
        <>
            <div className="comment__form">
                <span className="comment__form_title">댓글 등록</span>
                <form action="">
                    <textarea className="comment__form_text"/>
                    
                    <div className="comment__submit_btn_div">
                        <input type="button" className="comment__submit_btn" name ="comment__submit_btn" value="입력"/>
                    </div>
                </form>
            </div>
        </>
    );
}