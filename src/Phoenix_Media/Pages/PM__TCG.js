import { Helmet, HelmetProvider } from "react-helmet-async";

const PM__TCG = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Temp</title>
        </Helmet>
      </HelmetProvider>
      <div>PM__Page</div>
    </>
  );
};

export default PM__TCG;
