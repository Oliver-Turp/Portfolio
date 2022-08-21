import { Helmet, HelmetProvider } from "react-helmet-async";

const PM__Patreon = () => {
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

export default PM__Patreon;
