/** Chunk was on web.js **/
/** chunk id: 468035, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  var n, r, i, a, s, o;
  let {
    Operator: l,
    QuestionID: c,
    ChoiceLocator: u,
    LeftOperand: d,
    RightOperand: f
  } = e;
  if (null == c) returntrue;
  let p = t[c];
  if (null == p || "" === p) returnfalse;
  let _ = null == u ? true : u.match(/SelectableChoice\/(\d+)/),
    h = null == _ ? true : _[1];
  switch (l) {
    case "Selected":
      return null != h && p.split(",").includes(h);
    case "NotSelected":
      return null != h && !p.split(",").includes(h);
    case "EqualTo":
      return p === (null != f ? f : d);
    case "NotEqualTo":
      return p !== (null != f ? f : d);
    case "GreaterThan":
      return Number(p) > Number(null != (n = null != f ? f : d) ? n : 0);
    case "LessThan":
      return Number(p) < Number(null != (r = null != f ? f : d) ? r : 0);
    case "GreaterThanOrEqualTo":
      return Number(p) >= Number(null != (i = null != f ? f : d) ? i : 0);
    case "LessThanOrEqualTo":
      return Number(p) <= Number(null != (a = null != f ? f : d) ? a : 0);
    case "Contains":
      return p.includes(null != (s = null != f ? f : d) ? s : "");
    case "DoesNotContain":
      return !p.includes(null != (o = null != f ? f : d) ? o : "");
    default:
      returntrue
  }
}

function i(e, t) {
  let n = [];
  for (let t in e) "Type" !== t && "object" == typeof e[t] && n.push(e[t]);
  if (0 === n.length) returntrue;
  let i = r(n[0], t);
  for (let e = 1; e < n.length; e++) {
    var a, s;
    let o = n[e],
      l = r(o, t);
    i = "Or" === (null != (a = null != (s = o.Conjuction) ? s : o.Conjunction) ? a : "And") ? i || l : i && l
  }
  return i
}

function a(e, t) {
  if (null == e.DisplayLogic) returntrue;
  let {
    DisplayLogic: n
  } = e;
  for (let e in n)
    if ("Type" !== e && "inPage" !== e && "object" == typeof n[e]) {
      let r = n[e];
      if ("If" === r.Type || "ElseIf" === r.Type) {
        if (i(r, t)) returntrue
      } else if ("Else" === r.Type) returntrue
    } returnfalse
}

function s(e, t) {
  if (null == e.SkipLogic || 0 === e.SkipLogic.length) return null;
  for (let i of e.SkipLogic) {
    var n, r;
    let {
      QuestionID: e,
      Condition: a,
      Value: s,
      SkipToDestination: o,
      ChoiceLocator: l
    } = i, c = t[e];
    if (null == c || "" === c) continue;
    let u = null == l ? true : l.match(/SelectableChoice\/(\d+)/),
      d = null == u ? true : u[1],
      f = false;
    switch (a) {
      case "Selected":
        f = null != d && c.split(",").includes(d);
        break;
      case "NotSelected":
        f = null != d && !c.split(",").includes(d);
        break;
      case "EqualTo":
        f = c === (null == s ? true : s.toString());
        break;
      case "NotEqualTo":
        f = c !== (null == s ? true : s.toString());
        break;
      case "GreaterThan":
        f = Number(c) > Number(null != s ? s : 0);
        break;
      case "LessThan":
        f = Number(c) < Number(null != s ? s : 0);
        break;
      case "GreaterThanOrEqualTo":
        f = Number(c) >= Number(null != s ? s : 0);
        break;
      case "LessThanOrEqualTo":
        f = Number(c) <= Number(null != s ? s : 0);
        break;
      case "Contains":
        f = c.includes(null != (n = null == s ? true : s.toString()) ? n : "");
        break;
      case "DoesNotContain":
        f = !c.includes(null != (r = null == s ? true : s.toString()) ? r : "")
    }
    if (f) {
      if ("ENDOFSURVEY" === (null == o ? true : o.trim().toUpperCase())) return "ENDOFSURVEY";
      return o
    }
  }
  return null
}

function o(e) {
  let t = [];
  for (let n of e.SurveyFlow.Flow)("Block" === n.Type || "Standard" === n.Type) && null != n.ID && t.push(n.ID);
  return t
}

function l(e) {
  let t = [],
    n = [];
  for (let r of e.BlockElements) "Page Break" === r.Type ? n.length > 0 && (t.push(n), n = []) : "Question" === r.Type && null != r.QuestionID && n.push(r.QuestionID);
  return n.length > 0 && t.push(n), t
}

function c(e) {
  for (let t of o(e)) {
    let n = l(e.Blocks[t]);
    if (n.length > 0 && n[0].length > 0) return {
      blockId: t,
      pageIndex: 0,
      questionIds: n[0],
      isComplete: false
    }
  }
  return {
    blockId: null,
    pageIndex: 0,
    questionIds: [],
    isComplete: true
  }
}

function u(e, t) {
  let {
    blockId: n,
    pageIndex: r,
    responses: i
  } = t, s = e.Blocks[n];
  if (null == s) return [];
  let o = l(s);
  return r >= o.length ? [] : o[r].filter(t => a(e.Questions[t], i))
}

function d(e, t) {
  let {
    blockId: n,
    pageIndex: r,
    responses: i
  } = t, a = o(e), c = e.Blocks[n];
  if (null == c) return {
    blockId: null,
    pageIndex: 0,
    questionIds: [],
    isComplete: true
  };
  let u = l(c),
    d = u[r];
  if (null != d && d.length > 0)
    for (let t = d.length - 1; t >= 0; t--) {
      let n = d[t];
      if (null != e.Questions[n] && null != i[n]) {
        let t = c.BlockElements.find(e => e.QuestionID === n);
        if (null != t) {
          let n = s(t, i);
          if ("ENDOFSURVEY" === n) return {
            blockId: null,
            pageIndex: 0,
            questionIds: [],
            isComplete: true
          };
          if (null != n)
            for (let t of a) {
              let r = l(e.Blocks[t]);
              for (let e = 0; e < r.length; e++)
                if (r[e].includes(n)) return {
                  blockId: t,
                  pageIndex: e,
                  questionIds: r[e],
                  isComplete: false
                }
            }
        }
      }
    }
  if (r + 1 < u.length) return {
    blockId: n,
    pageIndex: r + 1,
    questionIds: u[r + 1],
    isComplete: false
  };
  let f = a.indexOf(n);
  for (let t = f + 1; t < a.length; t++) {
    let n = a[t],
      r = l(e.Blocks[n]);
    if (r.length > 0 && r[0].length > 0) return {
      blockId: n,
      pageIndex: 0,
      questionIds: r[0],
      isComplete: false
    }
  }
  return {
    blockId: null,
    pageIndex: 0,
    questionIds: [],
    isComplete: true
  }
}
require.d(exports, {
  i: () => c,
  uy: () => u,
  vt: () => d
}), require("./747238.js"), require("./321073.js"), require("./733351.js"), require("./896048.js")