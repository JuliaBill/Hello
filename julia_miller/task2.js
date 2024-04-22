db.users.aggregate([
  {
    $sample: { size: 1 },
  },
]);
