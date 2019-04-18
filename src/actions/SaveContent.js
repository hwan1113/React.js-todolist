export const SaveContent = (title, content) => {
    return{
        type: 'SAVE_CONTENT',
        payload:{title: title, content: content }
    }
}