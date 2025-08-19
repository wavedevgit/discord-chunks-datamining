/** Chunk was on 66181 **/
/** chunk id: 956699, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ex
}), require("./388685.js"), require("./49124.js"), require("./35282.js"), require("./781311.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk661111 = require("./661111.js"),
  Chunk179658 = require("./179658.js"),
  Chunk491428 = require("./491428.js"),
  Chunk225433 = require("./225433.jsx"),
  Chunk484614 = require("./484614.jsx"),
  Chunk386506 = require("./386506.js"),
  Chunk865427 = require("./865427.js"),
  Chunk802098 = require("./802098.js"),
  Chunk663993 = require("./663993.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk482215 = require("./482215.jsx"),
  Chunk581612 = require("./581612.js"),
  Chunk580747 = require("./580747.js"),
  Chunk38618 = require("./38618.js"),
  Chunk375657 = require("./375657.js"),
  Chunk171393 = require("./171393.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk371651 = require("./371651.js"),
  Chunk398269 = require("./398269.jsx"),
  Chunk921801 = require("./921801.js"),
  Chunk857192 = require("./857192.js"),
  Chunk558724 = require("./558724.js"),
  Chunk808506 = require("./808506.js"),
  Chunk626135 = require("./626135.js"),
  Chunk709054 = require("./709054.js"),
  Chunk998502 = require("./998502.js"),
  Chunk210887 = require("./210887.js"),
  Chunk695346 = require("./695346.js"),
  Chunk306052 = require("./306052.jsx"),
  Chunk10298 = require("./10298.jsx"),
  Chunk526156 = require("./526156.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk908442 = require("./908442.js"),
  Chunk674336 = require("./674336.js"),
  Chunk620842 = require("./620842.js"),
  Chunk197571 = require("./197571.js"),
  Chunk154257 = require("./154257.js");

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ee(e, t, n[t])
    })
  }
  return e
}

function en(e, t) {
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
}
let ei = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
  er = [{
    value: "branch",
    label: "Branch Name"
  }, {
    value: "id",
    label: "Commit SHA"
  }];

function es(e) {
  return "discord_ios" in e || "discord_android" in e
}
class ea extends Chunk647438.Component {
  render() {
    let {
      project: e,
      overrideType: t,
      overrideId: n,
      disabled: r,
      error: s
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      className: a()(Chunk674336.buildOverrideGroup, Chunk197571.marginBottom20, Chunk620842.card, Chunk674336.row),
      children: [(0, Chunk951288.jsx)(Chunk225433.Z, {
        className: a()(Chunk674336.removeBuildOverride, {
          [Chunk674336.removeBuildOverrideDisabled]: Chunk647438
        }),
        onClick: Chunk647438 ? true : this.handleRemoveBuildOverride
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk197571.marginBottom8,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          basis: "50%",
          children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
            title: "Override Type",
            className: Chunk674336.item,
            children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
              options: er,
              onChange: this.handleOverrideTypeChanged,
              value: exports,
              isDisabled: Chunk647438
            })
          })
        }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
          basis: "50%",
          children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
            title: "branch" === exports ? "Branch Name" : "Commit SHA",
            className: Chunk674336.item,
            children: (0, Chunk951288.jsx)(Chunk481060.oil, {
              value: require,
              onChange: this.handleOverrideIdChanged,
              disabled: Chunk647438
            })
          })
        })]
      }), (0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
        children: [null != Chunk120356 && "" !== Chunk120356 && (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk674336.item,
          style: {
            color: Chunk692547.Z.unsafe_rawColors.RED_400.css
          },
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk120356
        }), (0, Chunk951288.jsxs)(Chunk481060.R94, {
          className: Chunk674336.item,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: ["This controls the build that will be served for the ", (0, Chunk951288.jsx)("code", {
            children: module
          }), " project."]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), ee(this, "handleRemoveBuildOverride", () => {
      this.props.onBuildOverrideRemoved(this.props.project)
    }), ee(this, "handleOverrideIdChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        id: e
      })
    }), ee(this, "handleOverrideTypeChanged", e => {
      this.props.onBuildOverrideUpdated(this.props.project, {
        type: e,
        id: ""
      })
    })
  }
}
class el extends Chunk647438.Component {
  async refreshBuildOverrides() {
    this.setState({
      loading: true
    });
    let e = await (0, Chunk865427.Ce)();
    this.setState({
      loading: false,
      buildOverrides: module,
      loadedBuildOverrides: o().cloneDeep(module),
      errors: {}
    })
  }
  isDirty() {
    let {
      buildOverrides: e,
      loadedBuildOverrides: t
    } = this.state;
    return !o().isEqual(module, exports)
  }
  componentDidMount() {
    this.refreshBuildOverrides()
  }
  getAvailableProjects() {
    let {
      buildOverrides: e
    } = this.state;
    if (null == module) return [];
    let t = Object.keys(module);
    return o().without(ei, ...exports)
  }
  renderEmpty() {
    return (0, Chunk951288.jsx)(Chunk481060.ubH, {
      theme: Chunk210887.Z.theme,
      className: a()(Chunk197571.marginTop40, Chunk197571.marginBottom20),
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: "You have no build overrides configured."
      })
    })
  }
  renderItems() {
    let {
      buildOverrides: e,
      saving: t,
      errors: n
    } = this.state;
    return null == module ? null : o().map(module, (e, r) => (0, i.jsx)(ea, {
      project: r,
      overrideType: e.type,
      overrideId: e.id,
      disabled: t,
      error: n[r],
      onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
      onBuildOverrideRemoved: this.handleBuildOverrideRemoved
    }, r))
  }
  renderRefreshButton() {
    return !this.state.didSave || this.isDirty() ? null : (0, Chunk951288.jsx)(Chunk600164.Z, {
      grow: 0,
      direction: Chunk600164.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: "Reload App",
          onClick: () => location.reload()
        })
      })
    })
  }
  renderLinkButton() {
    let {
      buildOverrides: e
    } = this.state;
    return null == module || 0 === Object.keys(module).length ? null : (0, Chunk951288.jsx)(Chunk600164.Z, {
      grow: 0,
      direction: Chunk600164.Z.Direction.HORIZONTAL_REVERSE,
      children: (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Generate Public Link",
          onClick: this.handleLinkGeneration
        })
      })
    })
  }
  renderSaveButton() {
    if (!this.isDirty()) return null;
    let {
      saving: e,
      buildOverrides: t
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      grow: 0,
      direction: Chunk600164.Z.Direction.HORIZONTAL_REVERSE,
      children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "active",
          text: "Save Build Overrides",
          disabled: es(null != exports ? exports : {}),
          onClick: this.handleSaveChanges,
          loading: module
        })
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "critical-primary",
          text: "Discard Changes",
          onClick: this.handleDiscardChanges,
          disabled: module
        })
      })]
    })
  }
  render() {
    let e, {
      loading: t,
      saving: n,
      buildOverrides: r
    } = this.state;
    e = exports ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
      className: Chunk197571.marginTop20
    }) : null != Chunk647438 && 0 === Object.keys(Chunk647438).length ? this.renderEmpty() : this.renderItems();
    let s = !require && !exports && this.getAvailableProjects().length > 0,
      a = es(null != Chunk647438 ? Chunk647438 : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "text-danger",
        variant: "text-md/normal",
        children: "Mobile build overrides must be generated using the desktop/web stable client for now!"
      }) : null;
    return (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
      children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk197571.marginTop60,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: Chunk197571.marginBottom20,
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            children: (0, Chunk951288.jsx)(Chunk481060.vwX, {
              tag: Chunk481060.RB0.H1,
              children: "Build Overrides"
            })
          }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            grow: 0,
            children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              size: "sm",
              text: "Add Build Override",
              onClick: this.handleAddBuildOverride,
              disabled: !Chunk120356
            })
          })]
        }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          direction: Chunk600164.Z.Direction.VERTICAL,
          children: [a, module, (0, Chunk951288.jsxs)(Chunk600164.Z, {
            grow: 0,
            direction: Chunk600164.Z.Direction.HORIZONTAL_REVERSE,
            children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
          })]
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), ee(this, "state", {
      loading: true,
      buildOverrides: {},
      loadedBuildOverrides: {},
      errors: {},
      saving: false,
      didSave: false
    }), ee(this, "handleAddBuildOverride", async () => {
      var e;
      let t = await (e = this.getAvailableProjects(), new Promise(t => {
        (0, p.h7j)(n => {
          let r = e => {
            n.onClose(), t(e)
          };
          return (0, i.jsxs)(p.Y0X, en(et({}, n), {
            "aria-label": "Choose A Project to Override",
            parentComponent: "UserSettingsDeveloperOptions",
            children: [(0, i.jsx)(p.xBx, {
              separator: false,
              children: (0, i.jsx)(p.X6q, {
                variant: "heading-lg/semibold",
                children: "Choose A Project to Override"
              })
            }), (0, i.jsx)(p.hzk, {
              children: (0, i.jsx)("div", {
                className: X.buildOverrideList,
                children: e.map(e => (0, i.jsx)(p.zxk, {
                  variant: "active",
                  text: e,
                  value: e,
                  onClick: () => r(e)
                }, e))
              })
            }), (0, i.jsx)(p.mzw, {
              children: (0, i.jsx)(p.zxk, {
                variant: "secondary",
                text: "Nevermind",
                onClick: () => r(null)
              })
            })]
          }))
        })
      }));
      if (null == t) return;
      let n = en(et({}, this.state.buildOverrides), {
        [t]: {
          type: "branch",
          id: ""
        }
      });
      this.setState({
        buildOverrides: n
      })
    }), ee(this, "handleBuildOverrideUpdated", (e, t) => {
      let {
        buildOverrides: n
      } = this.state, i = et({}, null != n ? n[e] : {}, t), r = en(et({}, this.state.buildOverrides), {
        [e]: i
      });
      this.setState({
        buildOverrides: r
      })
    }), ee(this, "handleBuildOverrideRemoved", e => {
      let t = et({}, this.state.buildOverrides);
      delete t[e], this.setState({
        buildOverrides: t
      })
    }), ee(this, "handleDiscardChanges", () => {
      this.setState({
        buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
        errors: {},
        didSave: false
      })
    }), ee(this, "handleSaveChanges", async () => {
      let {
        buildOverrides: e
      } = this.state;
      if (null == e) return;
      this.setState({
        saving: true
      });
      let t = await (0, j.aD)(e);
      if (200 === t.status) {
        let e = t.body;
        this.setState({
          buildOverrides: e,
          loadedBuildOverrides: o().cloneDeep(e),
          errors: {},
          didSave: true,
          saving: false
        })
      } else if (400 === t.status) {
        let e = t.body;
        this.setState({
          errors: e,
          saving: false,
          didSave: false
        })
      } else this.setState({
        saving: false,
        didSave: false
      })
    }), ee(this, "handleLinkGeneration", () => {
      let {
        buildOverrides: e
      } = this.state;
      (0, p.h7j)(t => (0, i.jsx)(eo, en(et({}, t), {
        buildOverrides: e
      })))
    })
  }
}
class eo extends Chunk647438.Component {
  isMobile() {
    var e;
    return es(null != (e = this.props.buildOverrides) ? module : {})
  }
  renderSettingsForm() {
    let {
      ttlSeconds: e,
      releaseChannel: t,
      userIdEntry: n,
      userIdEntryError: r,
      allowedVersions: s,
      allowedVersionEntry: a,
      allowedVersionEntryError: l,
      allowLoggedOut: o,
      experiments: c,
      experimentsError: d
    } = this.state, u = Chunk908442.S6.find(t => t.value === e), m = Chunk120356.map(e => ({
      label: e,
      value: e
    }));
    return (0, Chunk951288.jsxs)(Chunk600164.Z.Child, {
      basis: "70%",
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Expire After",
        className: Chunk197571.marginBottom20,
        children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
          value: null != Chunk433517 ? Chunk433517.value : null,
          options: Chunk908442.S6,
          onChange: this.handleExpirationChange
        })
      }), this.isMobile() ? null : (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Release Channel",
        className: Chunk197571.marginBottom20,
        children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
          value: exports,
          options: Chunk908442.F$,
          onChange: this.handleReleaseChannelChange
        })
      }), this.isMobile() ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: "Add allowed app version (required)",
          className: Chunk197571.marginBottom20,
          children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
            direction: Chunk600164.Z.Direction.HORIZONTAL,
            children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
              wrap: true,
              basis: "90%",
              children: (0, Chunk951288.jsx)(Chunk481060.oil, {
                autoFocus: true,
                value: a,
                onKeyDown: this.handleAllowedVersionEnter,
                error: Chunk392711,
                onChange: this.handleAllowedVersionEntry,
                placeholder: "Example: 34"
              })
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Add",
              onClick: this.handleAddAllowedVersion
            })]
          })
        }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
          title: "Remove allowed app version",
          className: Chunk197571.marginBottom20,
          children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: null,
            options: Chunk692547,
            onChange: this.handleRemoveAllowedVersion,
            isDisabled: 0 === Chunk120356.length
          })
        })]
      }) : null, this.isMobile() ? null : (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        title: "Limit to User IDs (optional)",
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z, {
          direction: Chunk600164.Z.Direction.HORIZONTAL,
          children: (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            wrap: true,
            basis: "90%",
            children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
              value: require,
              error: Chunk647438,
              onBlur: () => this.setUserEntryError(""),
              onChange: this.handleUserIDEntry
            })
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: Chunk197571.marginTop8,
          children: "User IDs can be separated by whitespace or commas."
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.xJW, {
        title: "Client Experiment Override",
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk600164.Z, {
          direction: Chunk600164.Z.Direction.HORIZONTAL,
          children: (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            wrap: true,
            basis: "90%",
            children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
              value: Chunk268146,
              error: Chunk442837,
              onChange: this.handleExperiments,
              placeholder: '{"2022-01_threads":1}'
            })
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: Chunk197571.marginTop8,
          children: "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well."
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        onChange: this.handleAllowLoggedOut,
        value: o,
        children: "Allow logged out users"
      })]
    })
  }
  renderPayloadBlock() {
    let e = JSON.stringify(this.generatePayload(), null, 2),
      t = () => module,
      r = (0, Chunk951288.jsx)(Chunk663993.GI, {
        createPromise: () => Promise.resolve().then(require.bind(require, 364964)),
        webpackId: 364964,
        renderFallback: exports,
        render: n => {
          let r = n.highlight("json", e, true);
          return null == r ? t() : (0, i.jsx)("code", {
            className: "hljs scroller ".concat(r.language, " ").concat($.scrollbarGhost, " ").concat(X.codebox),
            dangerouslySetInnerHTML: {
              __html: r.value
            }
          })
        }
      });
    return (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
      children: (0, Chunk951288.jsx)(Chunk481060.Zbd, {
        children: (0, Chunk951288.jsx)("pre", {
          children: Chunk647438
        })
      })
    })
  }
  renderLinkForm() {
    let {
      status: e,
      statusText: t,
      publicLink: n
    } = this.state, r = "text-default";
    switch (module) {
      case 0:
        r = "text-feedback-critical";
        break;
      case 1:
        r = "text-feedback-warning"
    }
    return (0, Chunk951288.jsxs)("div", {
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Signed Link",
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
            wrap: true,
            basis: "75%",
            children: (0, Chunk951288.jsx)(Chunk484614.Z, {
              value: require
            })
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Generate Link",
            onClick: this.handleGenerateLink
          })]
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: Chunk647438,
        className: a()(Chunk197571.marginBottom8, Chunk197571.marginTop8),
        children: exports
      })]
    })
  }
  render() {
    let {
      onClose: e,
      transitionState: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      size: Chunk481060.CgR.LARGE,
      transitionState: exports,
      "aria-label": "Generate Public Build Override Link",
      parentComponent: "UserSettingsDeveloperOptions",
      children: [(0, Chunk951288.jsxs)(Chunk481060.xBx, {
        justify: Chunk600164.Z.Justify.BETWEEN,
        separator: false,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-lg/semibold",
          children: "Generate Public Build Override Link"
        }), (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: module
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.hzk, {
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          children: [this.renderSettingsForm(), this.renderPayloadBlock()]
        }), this.renderLinkForm()]
      })]
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, ee(this, "state", {
      ttlSeconds: 3600,
      releaseChannel: "all",
      userIds: new Set,
      userIdEntry: "",
      userIdEntryError: null,
      allowedVersions: [],
      allowedVersionEntry: "",
      allowedVersionEntryError: null,
      publicLink: " ",
      statusText: null,
      status: 0,
      allowLoggedOut: false
    }), ee(this, "setUserEntryError", e => {
      this.setState({
        userIdEntryError: e
      })
    }), ee(this, "setStatusMessage", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
      t.setState({
        statusText: e,
        status: n
      })
    }), ee(this, "handleUserIDEntry", e => {
      if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
      let t = new Set(e.split(/[,\s]+/).filter(Boolean));
      this.setState({
        userIdEntry: e,
        userIds: t
      })
    }), ee(this, "setAllowedVersionError", e => {
      this.setState({
        allowedVersionEntryError: e
      })
    }), ee(this, "handleAllowedVersionEntry", e => {
      this.setState({
        allowedVersionEntry: e
      })
    }), ee(this, "handleAllowedVersionEnter", e => {
      e.charCode === K.yXg.ENTER && this.handleAddAllowedVersion()
    }), ee(this, "handleAddAllowedVersion", () => {
      let {
        allowedVersions: e,
        allowedVersionEntry: t
      } = this.state;
      return 0 === (t = t.trim()).length ? this.setAllowedVersionError("Enter a valid version number!") : e.indexOf(t) >= 0 ? this.setAllowedVersionError("You already added that version!") : void this.setState({
        allowedVersions: [...e, t],
        allowedVersionEntry: "",
        allowedVersionEntryError: ""
      })
    }), ee(this, "handleRemoveAllowedVersion", e => {
      let {
        allowedVersions: t
      } = this.state;
      t = t.filter(t => t !== e), this.setState({
        allowedVersions: t
      })
    }), ee(this, "handleAllowLoggedOut", e => {
      this.setState({
        allowLoggedOut: e
      })
    }), ee(this, "handleExpirationChange", e => {
      this.setState({
        ttlSeconds: e
      })
    }), ee(this, "handleReleaseChannelChange", e => {
      this.setState({
        releaseChannel: e
      })
    }), ee(this, "handleExperiments", e => {
      if (0 === e.trim().length) return void this.setState({
        experimentsError: true
      });
      try {
        let t = JSON.parse(e);
        for (let e in t) {
          if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) return void this.setState({
            experimentsError: "".concat(e, " is an invalid experiment name")
          });
          if ("number" != typeof t[e]) return void this.setState({
            experimentsError: "".concat(e, " has an invalid bucket override")
          })
        }
      } catch (e) {
        this.setState({
          experimentsError: "Unable to parse experiments ".concat(e.message)
        });
        return
      }
      this.setState({
        experiments: e,
        experimentsError: true
      })
    }), ee(this, "generatePayload", () => ({
      overrides: this.props.buildOverrides,
      meta: {
        release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
        ttl_seconds: this.state.ttlSeconds,
        user_ids: Array.from(this.state.userIds),
        allowed_versions: this.isMobile() ? this.state.allowedVersions : true,
        allow_logged_out: this.state.allowLoggedOut,
        experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
      }
    })), ee(this, "handleGenerateLink", async () => {
      if (this.isMobile() && 0 === this.state.allowedVersions.length) return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
      this.setStatusMessage(null);
      let e = this.generatePayload(),
        t = await (0, j.M3)(e);
      false !== t.error ? this.setStatusMessage(JSON.stringify(t.error), 0) : (this.setState({
        publicLink: t.url.toString()
      }), 0 === e.meta.user_ids.length && this.setStatusMessage("Warning! No users added to the whitelist! This link could be used by anyone to override their build.", 1))
    })
  }
}

function ec() {
  let {
    horizontalSpacing: e,
    verticalSpacing: t,
    maxHorizontalSpacing: n,
    maxVerticalSpacing: s
  } = (0, Chunk482215.i)(), a = Chunk647438.useMemo(() => Array.from({
    length: require + 1
  }, (e, t) => t), [require]), l = Chunk647438.useMemo(() => Array.from({
    length: Chunk120356 + 1
  }, (e, t) => t), [Chunk120356]), {
    cssDebuggingEnabled: o,
    layoutDebuggingEnabled: c
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    cssDebuggingEnabled: Chunk857192.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: Chunk857192.default.layoutDebuggingEnabled
  })), u = (0, Chunk580747.Z)("highlight_void_toggleables");
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: o,
        note: "Display raw colors as pink. Toggling this will refresh the browser.",
        onChange: e => {
          (0, f.y)({
            cssDebuggingEnabled: e
          }), setTimeout(() => location.reload(), 500)
        },
        children: "Enable CSS Debugging"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk268146,
        note: "Renders a grid on top of the app to help debug layout alignment issues.",
        onChange: e => {
          (0, f.y)({
            layoutDebuggingEnabled: e
          })
        },
        children: "Enable Layout Debugging"
      })
    }), (0, Chunk951288.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
      children: [(0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Horizontal Grid Spacing"
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk197571.marginBottom20,
          type: Chunk481060.geA.DESCRIPTION,
          children: "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines."
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: module,
          minValue: 0,
          maxValue: require,
          markers: a,
          onValueChange: e => S.i.getState().setHorizontalSpacing(e),
          onValueRender: e => "".concat(Math.round(e), "px"),
          onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
          equidistant: true
        })]
      }), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          children: "Vertical Grid Spacing"
        }), (0, Chunk951288.jsx)(Chunk481060.R94, {
          className: Chunk197571.marginBottom20,
          type: Chunk481060.geA.DESCRIPTION,
          children: "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines."
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          initialValue: exports,
          minValue: 0,
          maxValue: Chunk120356,
          markers: Chunk392711,
          onValueChange: e => S.i.getState().setVerticalSpacing(e),
          onValueRender: e => "".concat(Math.round(e), "px"),
          onMarkerRender: e => e % 4 == 0 ? "".concat(e) : true,
          equidistant: true
        })]
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk433517,
        note: "Highlights toggleable components: Checkbox (green), RadioGroup (yellow), Switch (blue)",
        onChange: e => (0, T.Z)("highlight_void_toggleables", e),
        children: "Highlight Toggleable Components"
      })
    })]
  })
}

function ed() {
  let {
    isTracingRequests: e,
    isForcedCanary: t,
    isAxeEnabled: n,
    isSourceMapsEnabled: r,
    isIdleStatusIndicatorEnabled: s,
    onlyShowPreviewAppCollections: a,
    disableAppCollectionsCache: l,
    preventPopoutClose: o,
    logKeyboardMismatches: c
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    isTracingRequests: Chunk857192.default.isTracingRequests,
    isForcedCanary: Chunk857192.default.isForcedCanary,
    isAxeEnabled: Chunk857192.default.isAxeEnabled,
    isSourceMapsEnabled: Chunk857192.default.sourceMapsEnabled,
    isIdleStatusIndicatorEnabled: Chunk857192.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: Chunk857192.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: Chunk857192.default.disableAppCollectionsCache,
    preventPopoutClose: Chunk857192.default.preventPopoutClose,
    logKeyboardMismatches: Chunk857192.default.logKeyboardMismatches
  })), u = (0, Chunk171393.Z)("go_back_to_regular_input"), m = Chunk695346.zY.useSetting();
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        note: "Force trace all client requests with APM",
        onChange: e => (0, f.y)({
          trace: e
        }),
        children: "Enable Tracing Requests"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: "Force all API requests to canary instances",
        onChange: e => (0, f.y)({
          canary: e
        }),
        children: "Enable Forced Canary"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk692547,
        note: "Make user targetable for all active ads",
        onChange: e => F.zY.updateSetting(e),
        children: "Ads auto-targeting"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk647438,
        note: "Only enable on devices you trust.",
        onChange: e => (0, f.y)({
          sourceMapsEnabled: e
        }),
        children: "Enable source maps to be loaded on this client"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk120356,
        note: "Displays a floating idle status indicator",
        onChange: e => (0, f.y)({
          idleStatusIndicatorEnabled: e
        }),
        children: "Enable idle status indicator"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
        onChange: e => (0, f.y)({
          axeEnabled: e
        }),
        children: "Enable Accessibility Auditing"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: o,
        note: "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
        onChange: e => (0, f.y)({
          preventPopoutClose: e
        }),
        children: "Prevent Popouts From Closing Automatically"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk268146,
        note: "Logs mismatches in detected keyboard codes to the console",
        onChange: e => (0, f.y)({
          logKeyboardMismatches: e
        }),
        children: "Enable Logging of Keyboard Mismatches"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: a,
        note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
        onChange: e => (0, f.y)({
          onlyShowPreviewAppCollections: e
        }),
        children: "Preview unpublished application collections"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk392711,
        note: "Disable application collections cache so that you can see updates to collections immediately.",
        onChange: e => (0, f.y)({
          disableAppCollectionsCache: e
        }),
        children: "Disable application collections cache"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk433517,
        note: "Disable aligning chat input to the bottom of the screen",
        onChange: e => {
          M.default.track(K.rMx.GUILD_JOIN_FEEDBACK, {
            reason: "disable-align-chat-input",
            rating: e ? "yes" : "no"
          }), (0, y.s)("go_back_to_regular_input", {
            enabled: e
          })
        },
        children: "Disable aligning chat input to the bottom of the screen"
      })
    })]
  })
}

function eu() {
  let {
    isLoggingGatewayEvents: e,
    isLoggingOverlayEvents: t,
    isLoggingAnalyticsEvents: n,
    isAnalyticsDebuggerEnabled: r
  } = (0, Chunk442837.cj)([Chunk857192.default], () => ({
    isLoggingGatewayEvents: Chunk857192.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: Chunk857192.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: Chunk857192.default.isLoggingAnalyticsEvents,
    isAnalyticsDebuggerEnabled: Chunk857192.default.isAnalyticsDebuggerEnabled
  }));
  return (0, Chunk951288.jsxs)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
    children: [(0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
        onChange: e => (0, f.y)({
          logGatewayEvents: e
        }),
        children: "Enable Logging of Gateway Events to Console"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: exports,
        note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
        onChange: e => (0, f.y)({
          logOverlayEvents: e
        }),
        children: "Enable Logging of Overlay RPC Events & Commands"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: require,
        note: "Logs all analytics events to the developer console",
        onChange: e => (0, f.y)({
          logAnalyticsEvents: e
        }),
        children: "Enable Logging of Analytics Events"
      })
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: Chunk647438,
        note: "Displays a floating debugger with viewed impressions",
        onChange: e => (0, f.y)({
          analyticsDebuggerEnabled: e
        }),
        children: "Enable standard analytics debugger view"
      })
    })]
  })
}

function em() {
  throw Error("Send help")
}

function ep() {
  let e = (0, Chunk32300.XE)("developer_settings"),
    t = (0, Chunk442837.e7)([Chunk371651.default], () => Chunk371651.default.getForcedRenderMode()),
    [n, s] = Chunk647438.useState(false),
    [a, l] = Chunk647438.useState(""),
    o = module || exports === Chunk837268.R5.OUT_OF_PROCESS_V3 || exports === Chunk837268.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
  return (Chunk647438.useEffect(() => {
    (async () => {
      Chunk392711(await (0, Chunk808506.getOverlayURL)())
    })()
  }, []), require) ? {} : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: [Chunk674336.buttonsContainer, Chunk197571.marginBottom20].join(" "),
      children: [(0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
        children: o ? (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Open Overlay",
          onClick: () => (0, Chunk398269.f)(exports)
        }) : (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Open Overlay",
          onClick: () => window.open(a, "_blank"),
          disabled: "" === a
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset Socket",
          onClick: () => {
            Chunk38618.Z.getSocket().close(), Chunk38618.Z.getSocket().connect()
          }
        })
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Clear Caches",
          onClick: () => {
            Chunk570140.Z.dispatch({
              type: "CLEAR_CACHES",
              reason: "Requested by user",
              preventWritingCachesAgainThisSession: true,
              resetSocket: true
            })
          }
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.DEVELOPER_OPTIONS_CRASHES,
      children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
        title: "Crashes",
        tag: Chunk481060.RB0.H1,
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk674336.buttonsContainer,
          children: [(0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: true,
            options: [{
              value: true,
              label: "Native libdiscord crash"
            }, {
              value: 0,
              label: "Abort()"
            }, {
              value: 1,
              label: "SIGSEGV()"
            }, {
              value: 2,
              label: "EXCEPTION_ACCESS_VIOLATION"
            }, {
              value: 3,
              label: "RaiseFailFastException"
            }, {
              value: 4,
              label: "Out of Memory"
            }],
            onChange: e => null != e && V.ZP.crash(e)
          }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
            value: true,
            options: [{
              value: true,
              label: "Native JS crash"
            }, {
              value: Chunk268146.Xo.RendererProcessDelayed,
              label: "Delayed exception in renderer process"
            }, {
              value: Chunk268146.Xo.RendererProcess,
              label: "Exception in renderer process"
            }, {
              value: Chunk268146.Xo.MainProcess,
              label: "Exception in main process"
            }],
            onChange: e => null != e ? void V.ZP.triggerJSException(e) : true
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "React Crash",
            onClick: () => Chunk120356(true)
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "onClick Throw",
            onClick: em
          })]
        })
      })
    })]
  })
}

function eg() {
  let e = (0, Chunk442837.e7)([Chunk558724.Z], () => Chunk558724.Z.getSurveyOverride()),
    [t, n] = Chunk647438.useState(null != module ? module : "");
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
    children: (0, Chunk951288.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Survey Override",
      className: Chunk197571.marginTop60,
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        children: "Copy the ID of the Survey you want to test:"
      }), (0, Chunk951288.jsx)("form", {
        className: Chunk674336.surveyOverride,
        onSubmit: e => {
          e.preventDefault(), t.length > 0 ? b.Xq(t) : b.Xq(null)
        },
        children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          direction: "horizontal",
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            fullWidth: true,
            value: exports,
            onChange: require
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Save Override",
            type: "submit"
          })]
        })
      })]
    })
  })
}

function eh() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk802098.Z], () => Chunk802098.Z.overrideId()),
    [n, s] = Chunk647438.useState(null != (e = Chunk802098.Z.overrideId()) ? module : "");
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Changelog",
      className: Chunk197571.marginTop60,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Changelog Override"
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user."
          }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
            direction: "horizontal",
            gap: 8,
            children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
              fullWidth: true,
              value: require,
              onChange: Chunk120356
            }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
              variant: "primary",
              text: "Update Changelog",
              onClick: () => {
                "" === require ? Chunk661111.Z.setChangelogOverride(null) : Chunk661111.Z.setChangelogOverride(require)
              },
              disabled: exports === require
            })]
          })]
        }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 8,
          children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
            children: "Reset Changelog"
          }), (0, Chunk951288.jsx)(Chunk481060.R94, {
            children: "This will reset the changelog, so it will show again on the next startup."
          }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: "Reset Changelog",
            onClick: () => {
              let e = new Date("2018-01-01");
              Chunk695346.l4.updateSetting(Chunk709054.default.fromTimestamp(module.getTime())), Chunk433517.K.set("lastChangeLogDate", module)
            }
          })]
        })]
      })
    })
  })
}

function ef() {
  return (0, Chunk951288.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    children: (0, Chunk951288.jsx)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: "Client-Side Overrides",
      className: Chunk197571.marginTop60,
      children: (0, Chunk951288.jsx)(Chunk481060.Kqy, {
        gap: 16,
        children: (0, Chunk951288.jsx)("div", {
          className: [Chunk674336.buttonsContainer, Chunk197571.marginBottom20].join(" "),
          children: (0, Chunk951288.jsx)(Chunk306052.g, {})
        })
      })
    })
  })
}

function eb() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(el, {}), (0, Chunk951288.jsx)(eg, {}), (0, Chunk951288.jsx)(eh, {}), (0, Chunk951288.jsx)(ef, {})]
  })
}
let ex = function() {
  return (0, Chunk951288.jsx)(Chunk10298.N, {
    header: "Developer Options",
    children: (0, Chunk951288.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DEVELOPER_OPTIONS,
      settingsSection: Chunk981631.oAB.DEVELOPER_OPTIONS,
      tabs: [{
        title: "Overrides",
        component: eb,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB
      }, {
        title: "Manual Triggers",
        component: ep,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB
      }, {
        title: "Developer Flags",
        component: ed,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_FLAGS_TAB
      }, {
        title: "Logging",
        component: eu,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_LOGGING_TAB
      }, {
        title: "Design Tools",
        component: ec,
        setting: Chunk726985.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB
      }]
    })
  })
}