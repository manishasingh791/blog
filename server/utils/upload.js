import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const username = 'manisha';  // replace with your MongoDB username
const password= 'manishasingh73';

const storage = new GridFsStorage({
    url: `mongodb://${username}:${password}@blog-website-shard-00-00.762v9.mongodb.net:27017,blog-website-shard-00-01.762v9.mongodb.net:27017,blog-website-shard-00-02.762v9.mongodb.net:27017/?ssl=true&replicaSet=atlas-ky25rc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-website`,
    options: { useNewUrlParser: true },
    
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 