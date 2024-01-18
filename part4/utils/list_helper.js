const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.likes
    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    return blogs.reduce(
        (acc, blog) =>  acc = acc.likes > blog.likes ? acc : blog, 0
    )
} 

    
    module.exports = {
        dummy,
        totalLikes,
        favoriteBlog
    }