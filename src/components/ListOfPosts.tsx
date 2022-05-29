import React, { Suspense } from "react";
import { Col, Spinner, Card } from "react-bootstrap";
import { usePostsList } from '../hooks/usePostsList';

export const ListOfPosts = () => {
    const {data} = usePostsList();

    return (
        <Suspense fallback={<Spinner animation="grow" variant="secondary" />}>
            {
                data?.posts.map((post: any, index: number) =>
                    <Card key={post.header} className="mb-4">
                        <Card.Body>
                            <Card.Title>{post.header}</Card.Title>
                            <Card.Text data-testid={`post-text-${index}`}>{post.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </Suspense>
    )
}