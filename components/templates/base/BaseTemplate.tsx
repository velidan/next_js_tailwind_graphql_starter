export interface IBaseTemplate {}

const BaseTemplate: React.FC<IBaseTemplate> = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      Hello world!
    </div>
  );
};

export default BaseTemplate;
