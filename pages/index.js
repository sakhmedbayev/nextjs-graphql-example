import { gql, useQuery } from "@apollo/client";

export const GET_A_STRING = gql`
  query {
    getAString
  }
`;

const IndexPage = () => {
  const { loading, error, data } = useQuery(GET_A_STRING);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading</div>;

  return <div>{data?.getAString}</div>;
};

export default IndexPage;
