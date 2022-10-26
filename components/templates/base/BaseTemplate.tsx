export interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return (
    <div className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      Hello world!
    </div>
  );
};

export default BaseTemplate;
