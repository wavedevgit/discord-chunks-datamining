/** Chunk was on 86736 **/
/** chunk id: 643886, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk345162 = require("./345162.js"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk282923 = require("./282923.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let t = (0, a.e7)([d.Z], () => d.Z.getGuild(e));
  l()(null != t, "guild must be present to be editing its integration settings");
  let n = (0, a.e7)([u.Z], () => u.Z.getHighestRole(t)),
    r = (0, a.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
    f = (0, a.cj)([p.default], () => p.default.getUsers()),
    j = (0, a.e7)([c.Z], () => c.Z.getSortedRoles(e), [e]),
    v = i.useMemo(() => {
      let e = [];
      for (let n of r) {
        let i = f[n.userId];
        if (null == i || i.bot) continue;
        let r = i.id !== t.ownerId && !m.BT({
          permission: g.Plq.ADMINISTRATOR,
          user: i,
          context: t
        }) && u.Z.canManageUser(g.Plq.USE_APPLICATION_COMMANDS, i, t);
        e.push({
          id: i.id,
          canManage: r,
          nick: n.nick,
          username: i.username
        })
      }
      return e
    }, [t, r, f]),
    O = e => {
      var t;
      return e.managed && (null == (t = e.tags) ? true : t.bot_id) != null
    },
    y = i.useMemo(() => {
      let e = [];
      for (let i of j) {
        if (O(i)) continue;
        let r = !(0, o.Fs)(i, g.Plq.ADMINISTRATOR) && u.Z.isRoleHigher(t, n, i),
          l = {
            id: i.id,
            name: i.name,
            canManage: r
          };
        (0, o.fI)(i) ? e.unshift(l): e.push(l)
      }
      return e
    }, [j, t, n]),
    [_, C] = i.useState(""),
    N = i.useMemo(() => {
      var t;
      let n = (t = _).startsWith("@") ? t.substr(1) : t,
        i = _.startsWith("@") ? y.filter(t => t.id === e) : y;
      return {
        members: (0, b.B)(v, h, n),
        roles: (0, b.B)(i, x, n)
      }
    }, [e, v, _, y]);
  return {
    query: _,
    results: N,
    setQuery: C,
    unfilteredCount: N.members.length + N.roles.length
  }
}

function h(e) {
  let t = [e.username];
  return (null == e ? true : e.nick) != null && t.push(e.nick), {
    id: e.id,
    names: t
  }
}

function x(e) {
  return {
    id: e.id,
    names: [e.name]
  }
}