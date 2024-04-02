import styled from "styled-components";
import { UseRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import { Stats } from "./Stats";
import { useCabins } from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export function DashboardLayout() {
  const { bookings, isLoading } = UseRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading1,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoading2 } = useCabins();
  console.log(bookings);

  if (isLoading || isLoading1 || isLoading2) return <Spinner />;
  return (
    <>
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
        <div>Today's activities</div>
        <div>Chart stay durations</div>
        <div>Chart sales</div>
      </StyledDashboardLayout>
    </>
  );
}
