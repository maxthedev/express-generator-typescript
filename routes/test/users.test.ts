import request from 'supertest';
import app from '../../app';

it('responds with hi message', async () => {
    const response = await request(app)
        .get('/users')
        .send()
        .expect(200);
    expect(response.body.message).toEqual('hi');
});
