import React, {useState} from "react";

// const Boutons = props => {
//     const {moins, plus, page, nombrePages, nouvellePagination} = props;

const Boutons = ({moins, plus, page, nombrePages, nouvellePagination}) => {    
    return (
	<article className="btns">
	    <button className="decrement" onClick={moins}>&lt;&lt;</button>
	    <input className="compteur" type="text" value={`${page + 1}/${nombrePages}`} disabled />
	    <button className="increment"onClick={plus}>&gt;&gt;</button>
	    <label htmlFor="pagination">Pagination</label>
	    <input className="pagination" name="pagination" type="text"  pattern='[0-9]*' onBlur={(e) => nouvellePagination(e)} onChange={(e) => nouvellePagination(e)} />

	</article>
    );
};

export default Boutons;
