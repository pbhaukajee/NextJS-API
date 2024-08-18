import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req, res) {
  if (req.method === "DELETE") {
  }
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  feedbackData.find((feeback) => feedbackData.id === feedbackId);
  res.status(200).json({ feedback: SelectedFeeback });
}

export default handler;
