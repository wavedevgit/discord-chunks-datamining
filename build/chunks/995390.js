/** Chunk was on 86736 **/
/** chunk id: 995390, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./539854.js"), require("./388685.js"), require("./467055.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk139387 = require("./139387.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk905753 = require("./905753.js"),
  Chunk399860 = require("./399860.js"),
  Chunk981631 = require("./981631.js");

function O(e) {
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

function y(e, t, n) {
  let r = (0, s.e7)([x.Z], () => x.Z.getApplicationPermissions()),
    a = i.useMemo(() => (function(e, t) {
      let n = O({}, t),
        i = (0, u.bD)(e),
        r = (0, j.rE)(i, d.Kw.CHANNEL),
        l = (0, j.rE)(e, d.Kw.ROLE);
      return l in n || (n[l] = {
        id: e,
        permission: true,
        type: d.Kw.ROLE
      }), r in n || (n[r] = {
        id: i,
        permission: true,
        type: d.Kw.CHANNEL
      }), n
    })(e, null != r ? r : {}), [r, e]),
    y = (0, s.e7)([x.Z], () => {
      var e;
      if (null == n) return;
      let t = x.Z.getCommand(n);
      return null != (e = null == t ? true : t.permissions) ? e : {}
    }, [n]),
    _ = (0, s.e7)([x.Z], () => {
      var e;
      return null == n ? x.Z.getEditedApplication() : null == (e = x.Z.getEditedCommand()) ? true : e.permissions
    }, [n]),
    C = null != n ? n : t,
    N = null != n ? y : a,
    S = i.useMemo(() => null != _ ? _ : O({}, null != N ? N : {}), [_, N]),
    I = i.useMemo(() => Object.keys(S).length, [S]),
    w = i.useMemo(() => null == N || null == S ? null : !o().isEqual(N, S), [N, S]);
  return i.useEffect(() => {
    C === t && (w ? c.Z.startEditingCommandPermissions(C) : c.Z.stopEditingCommandPermissions(C))
  }, [t, w, C]), {
    originalApplicationPermissions: a,
    originalCommandPermissions: y,
    editedTargetPermissions: function(e, t) {
      let n = (0, s.e7)([b.Z], () => b.Z.getGuild(e), [e]);
      l()(null != n, "guild must be present to be editing its integration settings");
      let r = (0, s.e7)([g.Z], () => g.Z.getHighestRole(n), [n]),
        a = (0, s.e7)([f.default], () => {
          var e;
          return null == (e = f.default.getCurrentUser()) ? true : e.id
        });
      l()(null != a, "useComputePermissions: currentUserId must not be null");
      let o = a === n.ownerId,
        {
          channelIds: c,
          roleIds: x,
          userIds: j
        } = i.useMemo(() => {
          let e = [],
            n = [],
            i = [];
          for (let r of Object.values(t)) r.type === d.Kw.CHANNEL ? e.push(r.id) : r.type === d.Kw.ROLE ? n.push(r.id) : r.type === d.Kw.USER && i.push(r.id);
          return {
            channelIds: e,
            roleIds: n,
            userIds: i
          }
        }, [t]),
        y = (0, s.cj)([p.Z], () => Object.fromEntries(c.map(p.Z.getChannel).filter(h.lm).map(e => [e.id, e])), [c]),
        _ = (0, s.cj)([m.Z], () => Object.fromEntries(x.map(t => m.Z.getRole(e, t)).filter(h.lm).map(e => [e.id, e])), [x, e]),
        C = (0, s.cj)([f.default], () => Object.fromEntries(j.map(f.default.getUser).filter(h.lm).map(e => [e.id, e])), [j]);
      return i.useMemo(() => {
        let e = n.id,
          i = (0, u.bD)(n.id),
          l = {};
        for (let [a, s] of Object.entries(t)) {
          let t = false,
            c = false;
          if (s.type === d.Kw.CHANNEL) {
            let e = s.id === i,
              n = y[s.id];
            t = e || g.Z.can(v.Plq.VIEW_CHANNEL, n), c = true
          } else if (s.type === d.Kw.ROLE) {
            let i = s.id === e,
              l = _[s.id];
            t = i || null != l, c = o || i || g.Z.isRoleHigher(n, r, l)
          } else if (s.type === d.Kw.USER) {
            let e = C[s.id];
            t = null != e, c = null != e && (o || g.Z.canManageUser(v.Plq.USE_APPLICATION_COMMANDS, e, n))
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
          }(O({}, s), {
            canRead: t,
            canWrite: c
          })
        }
        return l
      }, [y, n, r, o, t, _, C])
    }(e, S),
    hasChanges: w,
    selectedPermissionCount: I
  }
}