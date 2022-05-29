import {setupWorker, rest} from 'msw';
import { postsResponse } from '../mocks/myAPI.mocks';

export const getPostsHandler = () =>
    rest.get('api/posts', (req, res, ctx) => {
        return res(ctx.json(postsResponse));
    });