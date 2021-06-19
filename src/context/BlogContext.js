import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'delete_blogpost':
			return state.filter((blogPost)=> blogPost.id != action.playload);
		case 'add_blogpost':
			return [...state, { id: Math.floor(Math.random() * 99999), title: `blog post #${state.length + 1}` }];

		default:
			return state;
	}
};
const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add_blogpost' });
	};

};
const deleteBlogPost = (dispatch)=>{
	return (id) =>{
		dispatch({type:'delete_blogpost',playload: id})
	};
};


export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost,deleteBlogPost }, []);
