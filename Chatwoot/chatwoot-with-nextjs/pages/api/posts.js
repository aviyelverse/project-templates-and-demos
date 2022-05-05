const posts = (req, res) => {
    // Exporting simple demo posts for now
    res.status(200).json({
    posts: [
      {
        id: 1,
        title: "Chatwoot is really easy to implement in NextJs apps",
        body: "A repository where I integrate nextJS with chatwoot",
        published: true,
      },
      {
        id: 2,
        title: "Chatwoot is really easy to implement in NextJs apps",
        body: "A repository where I integrate nextJS with chatwoot",
        published: true,
      },
      {
        id: 3,
        title: "Chatwoot is really easy to implement in NextJs apps",
        body: "A repository where I integrate nextJS with chatwoot",
        published: true,
      },
      {
        id: 4,
        title: "Chatwoot is really easy to implement in NextJs apps",
        body: "A repository where I integrate nextJS with chatwoot",
        published: true,
      },
      {
        id: 5,
        title: "Chatwoot is really easy to implement in NextJs apps",
        body: "A repository where I integrate nextJS with chatwoot",
        published: true,
      },
    ],
  });
};

export default posts;
