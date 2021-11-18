import { useTypedSuperpower } from "../hooks/useTypeSuperPower";
import cn from "classnames";

const TypePhase = {
  Typing: "Typing",
  Pausing: "Pausing",
  Deleting: "Deleting",
};

export const Superpowers = ({ superpowers }) => {
  const { typedSuperpower, selectedSuperpower, phase } =
    useTypedSuperpower(superpowers);

  return (
    <div className="h-8">
      <h2 className="text-center my-2 text-2xl font-semibold">
        <span
          className={cn("pt-4 pb-12 min-h-[10rem]", {
            ["end-cursor"]: phase !== TypePhase.Deleting,
            ["blinking"]: phase === TypePhase.Pausing,
          })}
          aria-label={selectedSuperpower}
        >
          {typedSuperpower}
        </span>
      </h2>
    </div>
  );
};
