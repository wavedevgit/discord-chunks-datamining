/** Chunk was on 44669 **/
/** chunk id: 343360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  QO: () => d,
  Zj: () => p,
  ws: () => a
}), require("./896048.js"), require("./667532.js"), require("./321073.js");
var Chunk999903 = require("./999903.js"),
  Chunk95701 = require("./95701.js"),
  Chunk111613 = require("./111613.js"),
  Chunk652215 = require("./652215.js");

function a(e, t) {
  return null != e && null != t && (e === t || (0, l.tr)(e) && (0, l.tr)(t) || (0, l.ay)(e) && (0, l.ay)(t))
}

function o(e, t, n, r) {
  let l = false;
  if (r.find((e, n) => {
      let {
        channel: r
      } = e;
      return r.id === t && (l = n, true)
    }), l < 0) return null;
  for (let t = l; t >= 0 && t < r.length; t += e) {
    let e = r[t];
    if (a(e.channel.type, n)) return e
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
    return null != e && (n || a(e.type, r))
  }).find((t, n) => {
    let {
      channel: {
        id: l
      }
    } = t;
    return null != e && l === e.id && (r = n, true)
  }), r
}

function u(e) {
  return {
    referenceId: e.id,
    parentId: e.parent_id
  }
}

function d(e, t, n, r, i) {
  var d, p, h, g;
  if (null == e || null == n) return null;
  let {
    GUILD_CATEGORY: f
  } = s.rbe;
  if (e.type === f) return r === t || r < t && e.type === n.type ? u(n) : r > t ? function(e, t, n) {
    var r;
    let {
      GUILD_CATEGORY: l
    } = s.rbe, i = n[(null != (r = c(t, n, true)) ? r : 0) + 1], a = o(false, t.id, e.type, n);
    return null == a || a.channel.id === e.id ? null : null == i || i.channel.type === l ? {
      referenceId: a.channel.id,
      parentId: null
    } : null
  }(e, n, i) : null;
  if (a(e.type, n.type)) return u(n);
  if (r < t) {
    let t, r;
    if (n.type === f) {
      let t = i[(null != (h = c(n, i, true)) ? h : 0) - 1],
        r = o(1, n.id, e.type, i);
      if (null == t) return {
        referenceId: null,
        parentId: null
      };
      if (null != r) {
        if (a(t.channel.type, e.type) || e.isGuildVocal() && (0, l.tr)(t.channel.type)) return {
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
    return t = i[(null != (p = c(n, i, true)) ? p : 0) - 1], r = o(1, n.id, e.type, i), null != t || e.isGuildVocal() ? (0, l.tr)(e.type) && null != r && ((0, l.tr)(t.channel.type) || t.channel.isCategory()) ? {
      referenceId: r.channel.id,
      parentId: n.parent_id
    } : null : {
      referenceId: null != r ? r.channel.id : null,
      parentId: null
    }
  }
  if (n.type === f) {
    let t = i[(null != (g = c(n, i, true)) ? g : 0) + 1],
      r = o(false, n.id, e.type, i);
    if (null != r) {
      if (null == t) return {
        referenceId: r.channel.id,
        parentId: n.id
      };
      if (a(t.channel.type, e.type) || (0, l.tr)(e.type) && t.channel.isGuildVocal()) return {
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
  let m = i[(null != (d = c(n, i, true)) ? d : 0) + 1],
    b = o(false, n.id, e.type, i);
  if (null == b) return null;
  if (e.isGuildVocal()) {
    if (null == m || m.channel.isCategory()) return {
      referenceId: b.channel.id,
      parentId: n.parent_id
    };
    if (m.channel.isGuildVocal()) return {
      referenceId: b.channel.id,
      parentId: m.channel.parent_id
    }
  }
  return e.isCategory() && (null == m || m.channel.isCategory()) ? {
    referenceId: b.channel.id,
    parentId: null
  } : null
}

function p(e, t, n, s) {
  let a, o, u = [],
    d = [],
    p = s._categories,
    h = t => {
      var n, r;
      let l;
      return l = null == a || null == o || (n = a, r = o, +(null == n || null == r || null == t[n] || t[n].channel !== e || null == t[r])) ? [...t] : i.Ay.moveItemFromTo(t, a, o), u = u.concat(i.Ay.calculatePositionDeltas({
        oldOrdering: t,
        newOrdering: l,
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
      })), l
    };
  if (e.isCategory()) {
    let n = [...p].slice(1);
    a = c(e, n), o = c(t, n), (d = h(n)).unshift(p[0])
  }
  if ((0, l.tr)(e.type) || e.isCategory()) {
    let n = (0, r.A)(d.length > 0 ? d : p, s, e => {
      let {
        channel: {
          type: t
        }
      } = e;
      return (0, l.tr)(t)
    });
    a = c(e, n), o = c(t, n), h(n)
  }
  if (e.isGuildVocal() || e.isCategory()) {
    let n = (0, r.A)(d.length > 0 ? d : p, s, e => {
      let {
        channel: t
      } = e;
      return t.isGuildVocal()
    });
    a = c(e, n), o = c(t, n), h(n)
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