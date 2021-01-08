import {Request, Response} from "express"
import {getPageContent} from "../helpers/puppeteer"
import cheerio from "cheerio"

const newsGet = async (req: Request, res: Response) => {
    try {
        const posts: { title: string, content: string, link: string }[] = []
        const url = `https://tproger.ru/tag/javascript/page/${req.params.page}/`

        const pageContent = await getPageContent(url)
        const $ = cheerio.load(pageContent)

        $('.post').each( async (i, postText) => {
            const post = {
                title: `${$(postText).find('.entry-title').text()}`,
                content: `${$(postText).find('.entry-content').text().trim()?.replace('…', '')}`,
                link: `${$(postText).find('a').attr('href')}`
            }

            posts.push(post)
        })

        res.json(posts)

    } catch (err) {
        throw err
    }

}

export {newsGet}
