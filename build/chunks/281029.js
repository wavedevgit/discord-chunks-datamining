/** Chunk was on 53494 **/
n.d(t, {
  Dn: () => p,
  if: () => d,
  ig: () => a
}), n(47120), n(733860), n(653041);
var r = n(740504),
  i = n(131704),
  o = n(990492),
  l = n(981631);

function a(e, t) {
  return null != e && null != t && (e === t || (0, i.r8)(e) && (0, i.r8)(t) || (0, i.bw)(e) && (0, i.bw)(t))
}

function s(e, t, n, r) {
  let i = -1;
  if (r.find((e, n) => {
      let {
        channel: r
      } = e;
      return r.id === t && (i = n, !0)
    }), i < 0) return null;
  for (let t = i; t >= 0 && t < r.length; t += e) {
    let e = r[t];
    if (a(e.channel.type, n)) return e
  }
  return null
}

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
        id: i
      }
    } = t;
    return null != e && i === e.id && (r = n, !0)
  }), r
}

function u(e) {
  return {
    referenceId: e.id,
    parentId: e.parent_id
  }
}

function d(e, t, n, r, o) {
  if (null == e || null == n) return null;
  let {
    GUILD_CATEGORY: d
  } = l.d4z;
  return e.type === d ? r === t || r < t && e.type === n.type ? u(n) : r > t ? function(e, t, n) {
    var r;
    let {
      GUILD_CATEGORY: i
    } = l.d4z, o = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1], a = s(-1, t.id, e.type, n);
    return null == a || a.channel.id === e.id ? null : null == o || o.channel.type === i ? {
      referenceId: a.channel.id,
      parentId: null
    } : null
  }(e, n, o) : null : a(e.type, n.type) ? u(n) : r < t ? n.type === d ? function(e, t, n) {
    var r;
    let o = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) - 1],
      l = s(1, t.id, e.type, n);
    if (null == o) return {
      referenceId: null,
      parentId: null
    };
    if (null != l) {
      if (a(o.channel.type, e.type) || e.isGuildVocal() && (0, i.r8)(o.channel.type)) return {
        referenceId: l.channel.id,
        parentId: o.channel.parent_id
      };
      if (o.channel.isCategory()) return {
        referenceId: l.channel.id,
        parentId: o.channel.id
      }
    }
    return null
  }(e, n, o) : function(e, t, n) {
    var r;
    let o = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) - 1],
      l = s(1, t.id, e.type, n);
    return null != o || e.isGuildVocal() ? (0, i.r8)(e.type) && null != l && ((0, i.r8)(o.channel.type) || o.channel.isCategory()) ? {
      referenceId: l.channel.id,
      parentId: t.parent_id
    } : null : {
      referenceId: null != l ? l.channel.id : null,
      parentId: null
    }
  }(e, n, o) : n.type === d ? function(e, t, n) {
    var r;
    let o = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1],
      l = s(-1, t.id, e.type, n);
    if (null != l) {
      if (null == o) return {
        referenceId: l.channel.id,
        parentId: t.id
      };
      if (a(o.channel.type, e.type) || (0, i.r8)(e.type) && o.channel.isGuildVocal()) return {
        referenceId: l.channel.id,
        parentId: o.channel.parent_id
      };
      if (o.channel.isCategory()) return {
        referenceId: l.channel.id,
        parentId: t.id
      }
    }
    return null
  }(e, n, o) : function(e, t, n) {
    var r;
    let i = n[(null !== (r = c(t, n, !0)) && void 0 !== r ? r : 0) + 1],
      o = s(-1, t.id, e.type, n);
    if (null == o) return null;
    if (e.isGuildVocal()) {
      if (null == i || i.channel.isCategory()) return {
        referenceId: o.channel.id,
        parentId: t.parent_id
      };
      if (i.channel.isGuildVocal()) return {
        referenceId: o.channel.id,
        parentId: i.channel.parent_id
      }
    }
    return e.isCategory() && (null == i || i.channel.isCategory()) ? {
      referenceId: o.channel.id,
      parentId: null
    } : null
  }(e, n, o)
}

function p(e, t, n, l) {
  let a, s, u = [],
    d = [],
    p = l._categories,
    h = t => {
      var n, r;
      let i;
      return i = null == a || null == s || (n = a, r = s, +(null == n || null == r || null == t[n] || t[n].channel !== e || null == t[r])) ? [...t] : o.ZP.moveItemFromTo(t, a, s), u = u.concat(o.ZP.calculatePositionDeltas({
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
    let n = [...p].slice(1);
    a = c(e, n), s = c(t, n), (d = h(n)).unshift(p[0])
  }
  if ((0, i.r8)(e.type) || e.isCategory()) {
    let n = (0, r.Z)(d.length > 0 ? d : p, l, e => {
      let {
        channel: {
          type: t
        }
      } = e;
      return (0, i.r8)(t)
    });
    a = c(e, n), s = c(t, n), h(n)
  }
  if (e.isGuildVocal() || e.isCategory()) {
    let n = (0, r.Z)(d.length > 0 ? d : p, l, e => {
      let {
        channel: t
      } = e;
      return t.isGuildVocal()
    });
    a = c(e, n), s = c(t, n), h(n)
  }
  if (e.parent_id !== n) {
    let t = !1;
    u.find(r => r.id === e.id && (r.parent_id = n, t = !0)), t || u.push({
      id: e.id,
      parent_id: n
    })
  }
  return u
}