import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";

const typeDefs = gql`
  type Query {
    getAString: String
  }
`;

const resolvers = {
  Query: {
    getAString: (_parent, args, _context) => {
      return "Hello";
    },
  },
};

const cors = Cors({
  allowMethods: ["GET", "POST", "OPTIONS"],
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(handler);
