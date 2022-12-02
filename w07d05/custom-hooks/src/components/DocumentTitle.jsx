import useDocumentTitle from "../hooks/useDocumentTitle";

const DocumentTitle = () => {
  const title = 'this is the about page';

  useDocumentTitle(title);

  // useEffect(() => {
  //   document.title = title;
  // }, [title]);

  return (
    <div>
      <h2>DocumentTitle component</h2>
    </div>
  );
};

export default DocumentTitle;
