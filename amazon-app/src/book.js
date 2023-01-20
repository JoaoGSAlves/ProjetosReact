const Book = (props) => {
	const { title, author, image, number } = props;
	// const getsingleBooks = () => {
	// 	getBook(id);
	// };
	//	console.log(props);
	// const displayTitle = () => {
	// 	console.log(title);
	// };
	return (
		<article className="book">
			<h3 className="number"># {number + 1}</h3>
			<img src={image} alt={title} />
			<h2>{title}</h2>
			{/* <button onClick={() => getBook(id)}>Display Title</button> */}
			<h4>{author}</h4>
		</article>
	);
};

export default Book;
