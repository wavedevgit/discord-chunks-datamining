/** Chunk was on 82477 **/
/** chunk id: 281029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Dn: () => f,
  if: () => d,
  ig: () => o
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk740504 = require("./740504.js"),
  Chunk131704 = require("./131704.js"),
  Chunk990492 = require("./990492.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  return null != e && null != t && (e === t || (0, i.r8)(e) && (0, i.r8)(t) || (0, i.bw)(e) && (0, i.bw)(t))
}

function s(e, t, n, r) {
  let i = false;
  if (r.find((e, n) => {
      let {
        channel: r
      } = e;
      return r.id === t && (i = n, true)
    }), i < 0) return null;
  for (let t = i; t >= 0 && t < r.length; t += e) {
    let e = r[t];
    if (o(e.channel.type, n)) return e
  }
  return null
}

function c(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (null == e) return 0;
  let r = null;
  return t.filter(t => {
    let {
      channel: {
        type: r
      }
    } = t;
    return null != e && (n || o(e.type, r))
  }).find((t, n) => {
    let {
      channel: {
        id: i
      }
    } = t;
    return null != e && i === e.id && (r = n, true)
  }), r
}

function u(e) {
  return {
    referenceId: e.id,
    parentId: e.parent_id
  }
}

function d(e, t, n, r, l) {
  var d, f, h, p, g;
  if (null == e || null == n) return null;
  let {
    GUILD_CATEGORY: b
  } = a.d4z;
  if (e.type === b) {
    if (r === t || r < t && e.type === n.type) return u(n);
    if (r > t) {
      let {
        GUILD_CATEGORY: t
      } = a.d4z, r = l[(null != (f = c(n, l, true)) ? f : 0) + 1], i = s(false, n.id, e.type, l);
      return null == i || i.channel.id === e.id ? null : null == r || r.channel.type === t ? {
        referenceId: i.channel.id,
        parentId: null
      } : null
    }
    return null
  }
  if (o(e.type, n.type)) return u(n);
  if (r < t) {
    if (n.type === b) {
      let t = l[(null != (p = c(n, l, true)) ? p : 0) - 1],
        r = s(1, n.id, e.type, l);
      if (null == t) return {
        referenceId: null,
        parentId: null
      };
      if (null != r) {
        if (o(t.channel.type, e.type) || e.isGuildVocal() && (0, i.r8)(t.channel.type)) return {
          referenceId: r.channel.id,
          parentId: t.channel.parent_id
        };
        if (t.channel.isCategory()) return {
          referenceId: r.channel.id,
          parentId: t.channel.id
        }
      }
      return null
    }
    let t = l[(null != (h = c(n, l, true)) ? h : 0) - 1],
      r = s(1, n.id, e.type, l);
    return null != t || e.isGuildVocal() ? (0, i.r8)(e.type) && null != r && ((0, i.r8)(t.channel.type) || t.channel.isCategory()) ? {
      referenceId: r.channel.id,
      parentId: n.parent_id
    } : null : {
      referenceId: null != r ? r.channel.id : null,
      parentId: null
    }
  }
  if (n.type === b) {
    let t = l[(null != (g = c(n, l, true)) ? g : 0) + 1],
      r = s(false, n.id, e.type, l);
    if (null != r) {
      if (null == t) return {
        referenceId: r.channel.id,
        parentId: n.id
      };
      if (o(t.channel.type, e.type) || (0, i.r8)(e.type) && t.channel.isGuildVocal()) return {
        referenceId: r.channel.id,
        parentId: t.channel.parent_id
      };
      if (t.channel.isCategory()) return {
        referenceId: r.channel.id,
        parentId: n.id
      }
    }
    return null
  }
  let m = l[(null != (d = c(n, l, true)) ? d : 0) + 1],
    y = s(false, n.id, e.type, l);
  if (null == y) return null;
  if (e.isGuildVocal()) {
    if (null == m || m.channel.isCategory()) return {
      referenceId: y.channel.id,
      parentId: n.parent_id
    };
    if (m.channel.isGuildVocal()) return {
      referenceId: y.channel.id,
      parentId: m.channel.parent_id
    }
  }
  return e.isCategory() && (null == m || m.channel.isCategory()) ? {
    referenceId: y.channel.id,
    parentId: null
  } : null
}

function f(e, t, n, a) {
  let o, s, u = [],
    d = [],
    f = a._categories,
    h = t => {
      var n, r;
      let i;
      return i = null == o || null == s || (n = o, r = s, +(null == n || null == r || null == t[n] || t[n].channel !== e || null == t[r])) ? [...t] : l.ZP.moveItemFromTo(t, o, s), u = u.concat(l.ZP.calculatePositionDeltas({
        oldOrdering: t,
        newOrdering: i,
        idGetter: e => {
          let {
            channel: t
          } = e;
          return t.id
        },
        existingPositionGetter: e => {
          let {
            channel: t
          } = e;
          return t.position
        }
      })), i
    };
  if (e.isCategory()) {
    let n = [...f].slice(1);
    o = c(e, n), s = c(t, n), (d = h(n)).unshift(f[0])
  }
  if ((0, i.r8)(e.type) || e.isCategory()) {
    let n = (0, r.Z)(d.length > 0 ? d : f, a, e => {
      let {
        channel: {
          type: t
        }
      } = e;
      return (0, i.r8)(t)
    });
    o = c(e, n), s = c(t, n), h(n)
  }
  if (e.isGuildVocal() || e.isCategory()) {
    let n = (0, r.Z)(d.length > 0 ? d : f, a, e => {
      let {
        channel: t
      } = e;
      return t.isGuildVocal()
    });
    o = c(e, n), s = c(t, n), h(n)
  }
  if (e.parent_id !== n) {
    let t = false;
    u.find(r => r.id === e.id && (r.parent_id = n, t = true)), t || u.push({
      id: e.id,
      parent_id: n
    })
  }
  return u
}