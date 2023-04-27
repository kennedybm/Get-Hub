import { ReactNode } from "react";

interface IDefaultErrorResponse {
  error: string;
}

interface IDefaultProviderProps {
  children: ReactNode;
}

interface IUsersData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IUsersDetails {
  login: string;
  id: number;
  url: string;
  created_at: string;
}

interface IUserRepositories {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string | undefined;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number | null;
  stargazers_count: number | null;
  watchers_count: number | null;
  language: string | null;
  has_issues: boolean | null;
  has_projects: boolean | null;
  has_downloads: boolean | null;
  has_wiki: boolean | null;
  has_pages: boolean | null;
  has_discussions: boolean | null;
  forks_count: boolean | null;
  mirror_url: string | null;
  archived: boolean | null;
  disabled: boolean | null;
  open_issues_count: number | null;
  license: string | null;
  allow_forking: boolean | null;
  is_template: boolean | null;
  web_commit_signoff_required: boolean | null;
  topics: Array<string | null>;
  visibility: string | null;
  forks: number | null;
  open_issues: number | null;
  watchers: number | null;
  default_branch: string | null;
  permissions: {
    admin: boolean | null;
    maintain: boolean | null;
    push: boolean | null;
    triage: boolean | null;
    pull: boolean | null;
  };
}

interface IContextProps {
  usersData: IUsersData[];
  setUsersData: React.Dispatch<React.SetStateAction<IUsersData[]>>;
  userDetails: IUsersDetails[];
  setUserDetails: React.Dispatch<React.SetStateAction<IUsersDetails[]>>;
  userRepositories: IUserRepositories[];
  setUserRepositories: React.Dispatch<
    React.SetStateAction<IUserRepositories[]>
  >;
  fetchUsers: (userId: number) => Promise<void>;
  fetchUsersDetails: (userName: string) => Promise<void>;
  fetchUserRepositories: (userName: string) => Promise<void>;
}

export type {
  IDefaultErrorResponse,
  IDefaultProviderProps,
  IContextProps,
  IUsersData,
  IUsersDetails,
  IUserRepositories,
};
