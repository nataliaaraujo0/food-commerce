import { CardBlog } from '../CardBlog'
import styles from './styles.module.scss'

interface IBlog {
    imgUrl: string;
    title: string;
    titleAvatar: string;
}

const blogs: Array<IBlog> = [
    {
        imgUrl: './images/blog_image_1.svg',
        title: 'Quick-start guide to nuts and seeds',
        titleAvatar: 'Kevin Ibrahim',
    },

    {
        imgUrl: './images/bloco_image_2.svg',
        title: 'Nutrition: Tips for Improving Your Health',
        titleAvatar: 'Mike Jackson',
    },

    {
        imgUrl: './images/bloco_image_3.svg',
        title: 'The top 10 benefits of eating healthy',
        titleAvatar: 'Bryan Mc Gregor',
    },

    {
        imgUrl: './images/bloco_image_4.svg',
        title: 'What Makes a Healthy Diet?',
        titleAvatar: 'Jashua',
    },

]

export function CatalogBlog() {

    return (
        <div className={styles.blogContainer}>


            <div className={styles.container}>
                <div className={styles.contentContainer}>

                    <div className={styles.texts}>
                        <h1>Read Our Blog</h1>
                        <p>Far far away, behind the word mountains,
                            far from the countries Vokalia and
                            Consonantia, there live the blind texts.</p>
                    </div>
                    <div className={styles.wrapperBlog}>

                        <div className={styles.cardBlogs}>
                            {blogs.map(blog => (
                                <CardBlog key={blog.title} imgUrl={blog.imgUrl} title={blog.title} titleAvatar={blog.titleAvatar} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}