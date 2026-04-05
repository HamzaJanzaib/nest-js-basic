import { Controller, Get } from '@nestjs/common';
import { PostService } from 'src/post/post.service';

@Controller('post')
export class PostController {
    constructor(private readonly appService: PostService) {}

    @Get()
    getAllPosts() {
        return this.appService.getAllPosts();
    }
}
