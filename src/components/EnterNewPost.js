import React from "react";
import { Form } from "react-bootstrap";

function EnterNewPost () {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>New post title</Form.Label>
          <Form.Control placeholder="Add new post title here" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>New post body</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Add your new post body here"/>
        </Form.Group>
      </Form>
    </>
  );
}

export default EnterNewPost;