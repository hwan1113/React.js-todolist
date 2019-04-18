export const noteContent = (title, content) => {
    return{
        type: 'CREATE_CONTENT',
        payload:{title: title, content: content }
    }
}