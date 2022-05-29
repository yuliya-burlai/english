import { rest } from "msw";
import {postsResponse} from '../../test/helpers/mocks/myAPI.mocks';

export const handlers = [
    rest.get('api/posts', (req, res, ctx) => {
        console.log('handler');
        return res(ctx.json(postsResponse));
    }),
    
    rest.post(`api/posts`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
]