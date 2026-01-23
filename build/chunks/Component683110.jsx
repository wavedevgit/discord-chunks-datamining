/** Chunk was on 22477 **/
/** chunk id: 683110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk198982 = require("./198982.js"),
  Chunk839214 = require("./839214.js"),
  Chunk47167 = require("./47167.js"),
  Chunk145497 = require("./145497.jsx"),
  Chunk137365 = require("./137365.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk520657 = require("./520657.js");
let g = (0, Chunk839214.D)(() => ({
  userId: null,
  state: null,
  loading: false,
  error: null
}));

function f(e) {
  let {
    title: t,
    guildIds: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: x.J1,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: x.uk,
      children: [0 === n.length && (0, a.jsx)("div", {
        className: x.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: "None"
        })
      }), n.map(e => {
        let t = m.A.getGuild(e);
        return null == t ? null : (0, a.jsxs)("div", {
          className: x.J1,
          children: [(0, a.jsx)(c.Ay, {
            guild: t,
            iconSize: 16
          }), (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: t.name
          })]
        }, e)
      })]
    })]
  })
}

function b(e) {
  var t;
  let {
    userState: n
  } = e, {
    user: i,
    searchWorkerUser: s,
    guildMembers: d,
    guildMemberRequests: g
  } = n, b = l.useCallback(e => {
    let {
      ok: t
    } = e;
    return t ? (0, a.jsx)(r.yr3, {
      size: "sm",
      color: r.LU0.colors.STATUS_POSITIVE
    }) : (0, a.jsx)(r.EpV, {
      size: "sm",
      color: r.LU0.colors.ICON_FEEDBACK_CRITICAL
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: x.N6,
    children: [(0, a.jsxs)("div", {
      className: x.J1,
      children: [b({
        ok: null != i
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore"
      })]
    }), null != i && (0, a.jsx)("div", {
      className: x.uk,
      children: (0, a.jsx)("div", {
        className: x.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(i.username)
        })
      })
    }), (0, a.jsxs)("div", {
      className: x.J1,
      children: [b({
        ok: null != s
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: null != s ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
      })]
    }), null != s && (0, a.jsxs)("div", {
      className: x.uk,
      children: [(0, a.jsx)("div", {
        className: x.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(s.username)
        })
      }), (0, a.jsx)("div", {
        className: x.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: "global name: ".concat(null != (t = s.globalName) ? t : "—")
        })
      }), (0, a.jsx)("div", {
        className: x.J1,
        children: (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: "nicknames:"
        })
      }), (0, a.jsxs)("div", {
        className: x.uk,
        children: [0 === Object.keys(s.nicknames).length && (0, a.jsx)("div", {
          className: x.J1,
          children: (0, a.jsx)(r.Text, {
            variant: "text-sm/normal",
            children: "None"
          })
        }), Object.entries(s.nicknames).map(e => {
          let [t, n] = e, l = m.A.getGuild(t), i = u.A.getChannel(t);
          return (0, a.jsxs)("div", {
            className: x.J1,
            children: [null != l && (0, a.jsx)(c.Ay, {
              guild: l,
              iconSize: 16
            }), null != l && (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: l.name
            }), null == l && null != i && (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: (0, o.m1)(i, h.default, p.A)
            }), (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: " (".concat(t, ")")
            }), null != n && "" !== n && (0, a.jsx)(r.Text, {
              variant: "text-sm/normal",
              children: " - ".concat(n)
            })]
          }, t)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: x.J1,
      children: [b({
        ok: d.length > 0
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: d.length > 0 ? "Guild members exist:" : "No guild members exist"
      })]
    }), d.length > 0 && (0, a.jsx)("div", {
      className: x.uk,
      children: d.map(e => {
        var t;
        let n = m.A.getGuild(e.guildId);
        if (null == n) return null;
        let l = null != (t = e.nick) ? t : "";
        return (0, a.jsxs)("div", {
          className: x.J1,
          children: [(0, a.jsx)(c.Ay, {
            guild: n,
            iconSize: 16
          }), (0, a.jsxs)(r.Text, {
            variant: "text-sm/normal",
            children: [n.name, "" !== l ? " - ".concat(l) : ""]
          })]
        }, "".concat(e.guildId))
      })
    }), (0, a.jsxs)("div", {
      className: x.J1,
      children: [(0, a.jsx)(r.mir, {
        size: "sm"
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: "GuildMemberRequesterStore State"
      })]
    }), null != g && (0, a.jsxs)("div", {
      className: x.uk,
      children: [(0, a.jsx)(f, {
        title: "Pending Guild Member Requests:",
        guildIds: g.pendingRequestGuildIds
      }), (0, a.jsx)(f, {
        title: "Sent Guild Member Requests:",
        guildIds: g.sentRequestGuildIds
      }), (0, a.jsx)(f, {
        title: "Unacknowledged Guild Member Requests:",
        guildIds: g.unacknowledgedRequestGuildIds
      })]
    })]
  })
}

function v() {
  let e = l.useCallback(e => {
      g.setState({
        userId: e,
        state: null
      })
    }, []),
    t = l.useCallback(async () => {
      let {
        userId: e,
        loading: t
      } = g.getState();
      if (!t && null != e) {
        g.setState({
          loading: true,
          error: null
        });
        try {
          let t = await (0, d.h2)(e);
          g.setState({
            state: t,
            loading: false
          })
        } catch (t) {
          let e = new i.LG(t);
          g.setState({
            error: e.getAnyErrorMessage(),
            loading: false
          })
        } finally {
          g.setState({
            loading: false
          })
        }
      }
    }, []),
    n = g.useField("loading");
  return (0, a.jsxs)("div", {
    className: x.$n,
    children: [(0, a.jsx)(r.ksK, {
      placeholder: "User ID",
      onChange: e
    }), (0, a.jsx)(r.Button, {
      onClick: t,
      text: "Get Snapshot",
      loading: n,
      disabled: n
    })]
  })
}

function j() {
  let e = g.useField("state"),
    t = g.useField("error");
  return (0, a.jsxs)(r.nVY, {
    label: "Debug User State",
    description: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
    children: [(0, a.jsx)(v, {}), null != t && (0, a.jsx)(r.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: x.qS,
      children: t
    }), null != e && (0, a.jsx)(b, {
      userState: e
    })]
  })
}