import React from "react";

const BoutonsInactifs = () => {
    return (
	<article className="btnsInactifs">
	    <button className="decrement" disabled>&lt;&lt;</button>
	    <input className="compteur" type="text" value={"1/1"} disabled />
	    <button className="increment" disabled>&gt;&gt;</button>
	    <label htmlFor="pagination">Pagination</label>
	    <input className="pagination" name="pagination" type="text"  pattern='[0-9]*' readOnly disabled />

	</article>
    );
};

export default BoutonsInactifs;
