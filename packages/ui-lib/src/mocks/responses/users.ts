import { rest } from 'msw';

export const userHandlers = [
  rest.get('http://localhost:2020/api/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      // ctx.status(200),
      ctx.json({
        id: userId,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
];
