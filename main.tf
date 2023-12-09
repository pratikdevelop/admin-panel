terraform {
  required_providers {
    netlify = {
      source  = "evankirkiles/netlify"
      version = "0.5.9"
    }
  }
}

provider "netlify" {
  token = "nfp_DXWztkLDJj1yhwTk3Cq5i3Cms2JAUdUG5265"
}

# Create a new deploy key for this specific website

resource "netlify_site" "check" {
  name = "admin-panel"

  repo {
    command       = "npm run build"
    deploy_key_id = "nfp_DXWztkLDJj1yhwTk3Cq5i3Cms2JAUdUG5265"
    dir           = "build"
    provider      = "github"
    repo_path     = "pratikdevelop/admin-panel"
    repo_branch   = "master"
  }
}