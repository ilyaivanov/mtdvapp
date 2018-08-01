import { markCurrentSkill, toggleSkill } from "./utils";

describe("Having three undone skills", () => {
  const skills = [{ title: "jun" }, { title: "mid" }, { title: "sen" }];

  it("marking the second one should mark first one as well", function() {
    const marked = toggleSkill(skills, skills[1]);
    expect(marked.map(s => !!s.isDone)).toEqual([true, true, false]);
  });

  it("first skill should be current", function() {
    const marked = markCurrentSkill(skills);
    expect(marked[0].isCurrent).toEqual(true);
  });
});

describe("Having two done and one undone skill", () => {
  const skills = [
    { title: "jun", isDone: true },
    { title: "mid", isDone: true },
    { title: "sen" }
  ];

  it("third skill should be current", function() {
    const marked = markCurrentSkill(skills);
    expect(marked[2].isCurrent).toEqual(true);
  });

  it("unmarking the first one should unmark second one as well", function() {
    const marked = toggleSkill(skills, skills[0]);
    expect(marked.map(s => !!s.isDone)).toEqual([false, false, false]);
  });
});

describe("Having two done skills", () => {
  const skills = [
    { title: "jun", isDone: true },
    { title: "mid", isDone: true }
  ];
  it("should not contain current skill", function() {
    const marked = markCurrentSkill(skills);
    expect(marked.map(s => !!s.isCurrent)).toEqual([false, false]);
  });
});
