import { markCurrentSkill } from "./utils";

describe("Having three undone skills", () => {
  const skills: any = [{ title: "jun" }, { title: "mid" }, { title: "sen" }];

  it("first skill should be current", function() {
    const marked = markCurrentSkill(skills);
    expect(marked[0].isCurrent).toEqual(true);
  });
});

describe("Having two done and one undone skill", () => {
  const skills: any = [
    { title: "jun", isDone: true },
    { title: "mid", isDone: true },
    { title: "sen" }
  ];

  it("third skill should be current", function() {
    const marked = markCurrentSkill(skills);
    expect(marked[2].isCurrent).toEqual(true);
  });
});

describe("Having two done skills", () => {
  const skills: any = [
    { title: "jun", isDone: true },
    { title: "mid", isDone: true }
  ];
  it("should not contain current skill", function() {
    const marked = markCurrentSkill(skills);
    expect(marked.map(s => !!s.isCurrent)).toEqual([false, false]);
  });
});
