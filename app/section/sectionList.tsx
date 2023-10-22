import { match } from "assert";
import { groupBy } from "lodash";
import moment from "moment";
import React from "react";
import SectioRow from "./sectionRow";

const getMatches = async () => {
  const res = await fetch("https://worldcupjson.net/matches");
  return res.json();
};

export default async function SectionList() {
  const matches: Match[] = await getMatches();
  const getMatchesDate = (item:Match) => moment(item.datetime).format("YYYY-MM-DD");
  const matchesByDate = groupBy(matches, getMatchesDate);
  return (
    <>
      <div>
        {Object.keys(matchesByDate).map((date,index) => (
            <div key={index}>
                <SectioRow matches={matchesByDate[date]} date={date} />
            </div>
        ))}
      </div>
    </>
  );
}
