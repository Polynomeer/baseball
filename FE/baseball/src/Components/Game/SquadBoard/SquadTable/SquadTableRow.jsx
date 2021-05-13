import SquadTableData from "./SquadTableData";
import { SquadBoard as S } from "@/Components/Game/GameStyles";

const SquadTableRow = ({ row }) => {
  return row ? (
    <S.SquadTable.SquadTableRow isCurrentPlayer={row.isCurrentPlayer}>
      <SquadTableData data={row.player} />
      <SquadTableData data={row.pa} />
      <SquadTableData data={row.hit} />
      <SquadTableData data={row.out} />
      {typeof row.average === "number" ? (
        <SquadTableData data={row.average.toFixed(3)} />
      ) : (
        <SquadTableData data={row.average} />
      )}
    </S.SquadTable.SquadTableRow>
  ) : null;
};

export default SquadTableRow;
