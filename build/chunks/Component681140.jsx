/** Chunk was on 29725 **/
/** chunk id: 681140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881052 = require("./881052.js"),
  Chunk972959 = require("./972959.js"),
  Chunk933557 = require("./933557.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk620481 = require("./620481.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk605716 = require("./605716.js");
let x = (0, Chunk972959.H)(() => ({
  userId: null,
  state: null,
  loading: false,
  error: null
}));

function b(e) {
  let {
    title: t,
    guildIds: n
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: f.detailsRow,
      children: (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: t
      })
    }), (0, a.jsxs)("div", {
      className: f.nestedDetailsList,
      children: [0 === n.length && (0, a.jsx)("div", {
        className: f.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "None"
        })
      }), n.map(e => {
        let t = m.Z.getGuild(e);
        return null == t ? null : (0, a.jsxs)("div", {
          className: f.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: t,
            iconSize: 16
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: t.name
          })]
        }, e)
      })]
    })]
  })
}

function g(e) {
  var t;
  let {
    userState: n
  } = e, {
    user: i,
    searchWorkerUser: s,
    guildMembers: d,
    guildMemberRequests: x
  } = n, g = r.useCallback(e => {
    let {
      ok: t
    } = e;
    return t ? (0, a.jsx)(l.owK, {
      size: "sm",
      color: l.TVs.colors.STATUS_POSITIVE
    }) : (0, a.jsx)(l.Mgn, {
      size: "sm",
      color: l.TVs.colors.STATUS_DANGER
    })
  }, []);
  return (0, a.jsxs)("div", {
    className: f.detailsList,
    children: [(0, a.jsxs)("div", {
      className: f.detailsRow,
      children: [g({
        ok: null != i
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: null != i ? "User exists in UserStore" : "User does not exist in UserStore"
      })]
    }), null != i && (0, a.jsx)("div", {
      className: f.nestedDetailsList,
      children: (0, a.jsx)("div", {
        className: f.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(i.username)
        })
      })
    }), (0, a.jsxs)("div", {
      className: f.detailsRow,
      children: [g({
        ok: null != s
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: null != s ? "User exists in User Search Worker" : "User does not exist in User Search Worker"
      })]
    }), null != s && (0, a.jsxs)("div", {
      className: f.nestedDetailsList,
      children: [(0, a.jsx)("div", {
        className: f.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "username: ".concat(s.username)
        })
      }), (0, a.jsx)("div", {
        className: f.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "global name: ".concat(null != (t = s.globalName) ? t : "—")
        })
      }), (0, a.jsx)("div", {
        className: f.detailsRow,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: "nicknames:"
        })
      }), (0, a.jsxs)("div", {
        className: f.nestedDetailsList,
        children: [0 === Object.keys(s.nicknames).length && (0, a.jsx)("div", {
          className: f.detailsRow,
          children: (0, a.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: "None"
          })
        }), Object.entries(s.nicknames).map(e => {
          let [t, n] = e, r = m.Z.getGuild(t), i = u.Z.getChannel(t);
          return (0, a.jsxs)("div", {
            className: f.detailsRow,
            children: [null != r && (0, a.jsx)(c.ZP, {
              guild: r,
              iconSize: 16
            }), null != r && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: r.name
            }), null == r && null != i && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: (0, o.F6)(i, h.default, p.Z)
            }), (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: " (".concat(t, ")")
            }), null != n && "" !== n && (0, a.jsx)(l.Text, {
              variant: "text-sm/normal",
              children: " - ".concat(n)
            })]
          }, t)
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: f.detailsRow,
      children: [g({
        ok: d.length > 0
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: d.length > 0 ? "Guild members exist:" : "No guild members exist"
      })]
    }), d.length > 0 && (0, a.jsx)("div", {
      className: f.nestedDetailsList,
      children: d.map(e => {
        var t;
        let n = m.Z.getGuild(e.guildId);
        if (null == n) return null;
        let r = null != (t = e.nick) ? t : "";
        return (0, a.jsxs)("div", {
          className: f.detailsRow,
          children: [(0, a.jsx)(c.ZP, {
            guild: n,
            iconSize: 16
          }), (0, a.jsxs)(l.Text, {
            variant: "text-sm/normal",
            children: [n.name, "" !== r ? " - ".concat(r) : ""]
          })]
        }, "".concat(e.guildId))
      })
    }), (0, a.jsxs)("div", {
      className: f.detailsRow,
      children: [(0, a.jsx)(l.d3s, {
        size: "sm"
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: "GuildMemberRequesterStore State"
      })]
    }), null != x && (0, a.jsxs)("div", {
      className: f.nestedDetailsList,
      children: [(0, a.jsx)(b, {
        title: "Pending Guild Member Requests:",
        guildIds: x.pendingRequestGuildIds
      }), (0, a.jsx)(b, {
        title: "Sent Guild Member Requests:",
        guildIds: x.sentRequestGuildIds
      }), (0, a.jsx)(b, {
        title: "Unacknowledged Guild Member Requests:",
        guildIds: x.unacknowledgedRequestGuildIds
      })]
    })]
  })
}

function v() {
  let e = Chunk473749.useCallback(e => {
      x.setState({
        userId: e,
        state: null
      })
    }, []),
    t = Chunk473749.useCallback(async () => {
      let {
        userId: e,
        loading: t
      } = x.getState();
      if (!exports && null != module) {
        x.setState({
          loading: true,
          error: null
        });
        try {
          let t = await (0, Chunk620481.V_)(module);
          x.setState({
            state: exports,
            loading: false
          })
        } catch (t) {
          let e = new Chunk881052.Hx(exports);
          x.setState({
            error: module.getAnyErrorMessage(),
            loading: false
          })
        } finally {
          x.setState({
            loading: false
          })
        }
      }
    }, []),
    n = x.useField("loading");
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk605716.inputWithButtonRow,
    children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
      placeholder: "User ID",
      onChange: module
    }), (0, Chunk54381.jsx)(Chunk481060.Button, {
      onClick: exports,
      text: "Get Snapshot",
      loading: require,
      disabled: require
    })]
  })
}

function j() {
  let e = x.useField("state"),
    t = x.useField("error");
  return (0, Chunk54381.jsxs)(Chunk481060.C3N, {
    label: "Debug User State",
    description: "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
    children: [(0, Chunk54381.jsx)(v, {}), null != exports && (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      className: Chunk605716.statusText,
      children: exports
    }), null != module && (0, Chunk54381.jsx)(g, {
      userState: module
    })]
  })
}