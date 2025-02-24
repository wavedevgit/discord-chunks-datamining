/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  let t = e.regex,
    n = {},
    r = {
      begin: /\$\{/,
      end: /\}/,
      contains: ["self", {
        begin: /:-/,
        contains: [n]
      }]
    };
  Object.assign(n, {
    className: "variable",
    variants: [{
      begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
    }, r]
  });
  let i = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      contains: [e.BACKSLASH_ESCAPE]
    },
    o = e.inherit(e.COMMENT(), {
      match: [/(^|\s)/, /#.*$/],
      scope: {
        2: "comment"
      }
    }),
    a = {
      begin: /<<-?\s*(?=\w+)/,
      starts: {
        contains: [e.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: "string"
        })]
      }
    },
    s = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, n, i]
    };
  i.contains.push(s);
  let l = {
      match: /\\"/
    },
    c = {
      className: "string",
      begin: /'/,
      end: /'/
    },
    u = {
      match: /\\'/
    },
    d = {
      begin: /\$?\(\(/,
      end: /\)\)/,
      contains: [{
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      }, e.NUMBER_MODE, n]
    },
    f = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
    p = e.SHEBANG({
      binary: `(${f.join("|")})`,
      relevance: 10
    }),
    _ = {
      className: "function",
      begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      returnBegin: !0,
      contains: [e.inherit(e.TITLE_MODE, {
        begin: /\w[\w\d_]*/
      })],
      relevance: 0
    },
    h = {
      match: /(\/[a-z._-]+)+/
    };
  return {
    name: "Bash",
    aliases: ["sh", "zsh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: ["if", "then", "else", "elif", "fi", "time", "for", "while", "until", "in", "do", "done", "case", "esac", "coproc", "function", "select"],
      literal: ["true", "false"],
      built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "sudo", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
    },
    contains: [p, e.SHEBANG(), _, d, o, a, h, s, l, c, u, n]
  }
}
e.exports = t