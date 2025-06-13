import React, { useState,  } from "react";
import { Button, Card, Form, Badge, Alert, Spinner, Modal } from "react-bootstrap";
import { FaRegComment, FaRegCheckCircle, FaRegEye, FaRegHeart } from "react-icons/fa";

const ShareAnonymously = () => {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  // const [adminReply, setAdminReply] = useState("");

  // Mock API call to simulate backend interaction
  const simulateAPI = async () => {
    setLoading(true);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        setLoading(false);
      }, 1000);
    });
  };

  const handleSubmit = async () => {
    if (text.trim()) {
      await simulateAPI();
      const newPost = {
        id: Date.now(),
        content: text,
        time: new Date().toLocaleString(),
        status: "posted",
        views: 0,
        replied: false,
        reply: "",
        likes: 0
      };
      setPosts([newPost, ...posts]);
      setText("");
    }
  };

  // const handleAdminReply = async () => {
  //   await simulateAPI();
  //   const updatedPosts = posts.map(post => 
  //     post.id === currentPost.id 
  //       ? { ...post, replied: true, reply: adminReply, status: "replied" } 
  //       : post
  //   );
  //   setPosts(updatedPosts);
  //   setShowReplyModal(false);
  //   setAdminReply("");
  // };

  const handleLike = async (postId) => {
    await simulateAPI();
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Simulate admin viewing the post
  const simulateAdminView = async (postId) => {
    await simulateAPI();
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, views: post.views + 1, status: "viewed" } 
        : post
    ));
  };

  return (
    <div style={{ padding: "30px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h2 className="mb-4">
          <span style={{ color: "#6c757d" }}>🗣</span> Anonymous Sharing Space
        </h2>
        
        <Alert variant="info">
          This is a safe space. Your identity remains completely hidden. 
          Our team checks messages daily and may respond with support resources.
        </Alert>

        <Card className="mb-4 shadow-sm">
          <Card.Body>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What's on your mind? Share anonymously..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ border: "1px solid #ced4da", borderRadius: "8px" }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                {text.length}/500 characters
              </small>
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={!text.trim() || loading}
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Post Anonymously"}
              </Button>
            </div>
          </Card.Body>
        </Card>

        <h4 className="mb-3">Recent Shares</h4>
        
        {posts.length === 0 ? (
          <Card className="text-center p-4">
            <Card.Text className="text-muted">
              No posts yet. Be the first to share...
            </Card.Text>
          </Card>
        ) : (
          posts.map((post) => (
            <Card key={post.id} className="mb-3 shadow-sm" onClick={() => simulateAdminView(post.id)}>
              <Card.Body>
                <Card.Text style={{ fontSize: "1.1rem" }}>{post.content}</Card.Text>
                
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <small className="text-muted me-3">
                      <FaRegEye className="me-1" /> {post.views} views
                    </small>
                    <Button 
                      variant="link" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(post.id);
                      }}
                    >
                      <FaRegHeart className="me-1" /> {post.likes}
                    </Button>
                  </div>
                  
                  <div>
                    {post.status === "posted" && (
                      <Badge bg="secondary">Waiting for review</Badge>
                    )}
                    {post.status === "viewed" && (
                      <Badge bg="info">Seen by support</Badge>
                    )}
                    {post.status === "replied" && (
                      <Button 
                        variant="link" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPost(post);
                          setShowReplyModal(true);
                        }}
                      >
                        <FaRegComment className="me-1" /> Admin replied
                      </Button>
                    )}
                    <small className="text-muted ms-2">🕒 {post.time}</small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))
        )}

        {/* Reply Modal */}
        <Modal show={showReplyModal} onHide={() => setShowReplyModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Admin Response</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentPost?.reply ? (
              <div>
                <p><strong>Your message:</strong> {currentPost.content}</p>
                <Alert variant="success">
                  <FaRegCheckCircle className="me-2" />
                  <strong>Support response:</strong> {currentPost.reply}
                </Alert>
              </div>
            ) : (
              <p>No reply yet from support team.</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowReplyModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ShareAnonymously;