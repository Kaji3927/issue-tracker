import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./IssueChart";
import { Flex, Grid } from "@radix-ui/themes";

export default async function Home() {
  const openIssuesCount = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgressIssuesCount = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssuesCount = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary
          open={openIssuesCount}
          inProgress={inProgressIssuesCount}
          closed={closedIssuesCount}
        />
        <IssueChart
          open={openIssuesCount}
          inProgress={inProgressIssuesCount}
          closed={closedIssuesCount}
        />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
