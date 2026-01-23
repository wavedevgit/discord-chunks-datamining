/** Chunk was on 21968 **/
/** chunk id: 825453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js"), require("./896048.js"), require("./446912.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk282956 = require("./282956.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk803378 = require("./803378.js"),
  Chunk200662 = require("./200662.js"),
  Chunk652215 = require("./652215.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function A(e, t, n) {
  let r = (0, o.bG)([x.A], () => x.A.getApplicationPermissions()),
    a = i.useMemo(() => {
      var t;
      let n, i, l, a;
      return t = e, n = y({}, null != r ? r : {}), i = (0, u.Ap)(t), l = (0, j.Eu)(i, d.RA.CHANNEL), (a = (0, j.Eu)(t, d.RA.ROLE)) in n || (n[a] = {
        id: t,
        permission: true,
        type: d.RA.ROLE
      }), l in n || (n[l] = {
        id: i,
        permission: true,
        type: d.RA.CHANNEL
      }), n
    }, [r, e]),
    A = (0, o.bG)([x.A], () => {
      var e;
      if (null == n) return;
      let t = x.A.getCommand(n);
      return null != (e = null == t ? true : t.permissions) ? e : {}
    }, [n]),
    v = (0, o.bG)([x.A], () => {
      var e;
      return null == n ? x.A.getEditedApplication() : null == (e = x.A.getEditedCommand()) ? true : e.permissions
    }, [n]),
    _ = null != n ? n : t,
    N = null != n ? A : a,
    w = i.useMemo(() => null != v ? v : y({}, null != N ? N : {}), [v, N]),
    T = i.useMemo(() => Object.keys(w).length, [w]),
    E = i.useMemo(() => null == N || null == w ? null : !s().isEqual(N, w), [N, w]);
  return i.useEffect(() => {
    _ === t && (E ? c.A.startEditingCommandPermissions(_) : c.A.stopEditingCommandPermissions(_))
  }, [t, E, _]), {
    originalApplicationPermissions: a,
    originalCommandPermissions: A,
    editedTargetPermissions: function(e, t) {
      let n = (0, o.bG)([g.A], () => g.A.getGuild(e), [e]);
      l()(null != n, "guild must be present to be editing its integration settings");
      let r = (0, o.bG)([b.A], () => b.A.getHighestRole(n), [n]),
        a = (0, o.bG)([f.default], () => {
          var e;
          return null == (e = f.default.getCurrentUser()) ? true : e.id
        });
      l()(null != a, "useComputePermissions: currentUserId must not be null");
      let s = a === n.ownerId,
        {
          channelIds: c,
          roleIds: x,
          userIds: j
        } = i.useMemo(() => {
          let e = [],
            n = [],
            i = [];
          for (let r of Object.values(t)) r.type === d.RA.CHANNEL ? e.push(r.id) : r.type === d.RA.ROLE ? n.push(r.id) : r.type === d.RA.USER && i.push(r.id);
          return {
            channelIds: e,
            roleIds: n,
            userIds: i
          }
        }, [t]),
        A = (0, o.cf)([p.A], () => Object.fromEntries(c.map(p.A.getChannel).filter(h.Vq).map(e => [e.id, e])), [c]),
        v = (0, o.cf)([m.A], () => Object.fromEntries(x.map(t => m.A.getRole(e, t)).filter(h.Vq).map(e => [e.id, e])), [x, e]),
        _ = (0, o.cf)([f.default], () => Object.fromEntries(j.map(f.default.getUser).filter(h.Vq).map(e => [e.id, e])), [j]);
      return i.useMemo(() => {
        let e = n.id,
          i = (0, u.Ap)(n.id),
          l = {};
        for (let [a, o] of Object.entries(t)) {
          let t = false,
            c = false;
          if (o.type === d.RA.CHANNEL) {
            let e = o.id === i,
              n = A[o.id];
            t = e || b.A.can(O.xBc.VIEW_CHANNEL, n), c = true
          } else if (o.type === d.RA.ROLE) {
            let i = o.id === e,
              l = v[o.id];
            t = i || null != l, c = s || i || b.A.isRoleHigher(n, r, l)
          } else if (o.type === d.RA.USER) {
            let e = _[o.id];
            t = null != e, c = null != e && (s || b.A.canManageUser(O.xBc.USE_APPLICATION_COMMANDS, e, n))
          }
          l[a] = function(e, t) {
            return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(t)).forEach(function(n) {
              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }), e
          }(y({}, o), {
            canRead: t,
            canWrite: c
          })
        }
        return l
      }, [A, n, r, s, t, v, _])
    }(e, w),
    hasChanges: E,
    selectedPermissionCount: T
  }
}